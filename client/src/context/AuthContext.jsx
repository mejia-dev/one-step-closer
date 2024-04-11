import { createContext, useState, useEffect, useLayoutEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {

  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // this code parses the existence of auth tokens on first render. Can't be done inline otherwise the state slice becomes a promise, not a string or null.
  const firstRenderCheckUser = async () => {
    const userDataExistence = await AsyncStorage.getItem('authTokens').then((response) => {
      if (response) {
        setAuthTokens(response);
        setUser(jwtDecode(response));
      } else {
        setAuthTokens(null);
        setUser(null);
      }
    });
  }
  firstRenderCheckUser();


  // login user. Fetch from the auth api. 
  // If the response is good, set the local state slices, then add the tokens to Async storage
  const loginUser = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/authapi/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'username': event.target.username.value, 'password': event.target.password.value })
    });
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      try {
        AsyncStorage.setItem('authTokens', JSON.stringify(data));
      } catch (error) {
        console.log("Error saving tokens to async storage: " + error.message);
      }
    } else {
      console.log('The API returned error code ' + response.status);
    }
  }


  // logout user. Clear local state slices, then remove tokens from async storage
  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    AsyncStorage.removeItem('authTokens');
  }


  // attempt to update the refresh token. If not successful, sign out the current user.
  const updateToken = async () => {
    const response = await fetch('http://127.0.0.1:8000/authapi/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'refresh': JSON.parse(authTokens)?.refresh })
    });
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      try {
        AsyncStorage.setItem('authTokens', JSON.stringify(data));
      } catch (error) {
        console.log("Error saving tokens to async storage: " + error.message);
      }
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  }

  useEffect(() => {
    // if the site is loading, update the token.
    if (loading) {
      updateToken()
    }

    // use this to convert milliseconds to seconds for the sake of the refresh interval.
    // refresh interval should refresh one minute sooner than access token lifetime (a token with 5 minute lifetime should refresh every 4 minutes)
    const minutesInMilliseconds = (minutes) => {
      return minutes * 60 * 1000
    }

    const refreshInterval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, minutesInMilliseconds(4))
    return () => clearInterval(refreshInterval)

  }, [authTokens, loading])

  let contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  return (
    <AuthContext.Provider value={contextData} >
      {children}
    </AuthContext.Provider>
  )
}