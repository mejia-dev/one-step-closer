import { createContext, useState, useEffect, useLayoutEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {

  // this code checks if there are authTokens in local storage. If there are authTokens, it keeps the existing ones. If not, it sets the value to null.
  const [authTokens, setAuthTokens] = useState(async () => AsyncStorage.getItem('authTokens') ? await AsyncStorage.getItem('authTokens') : null);
  const [user, setUser] = useState(null);

  // this code parses the existence of user data on first render. Can't be done inline otherwise the state slice becomes a promise, not a string or null.
  const firstRenderCheckUser = async () => {
    const userDataExistence = await AsyncStorage.getItem('authTokens').then((response) => {
      if (response) {
        setUser(jwtDecode(response));
      } else {
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

  // development only. Check for the exist
  const TESTgetUserData = async () => {
    event.preventDefault();
    try {
      const jsonValue = await AsyncStorage.getItem('authTokens');
      console.log(jsonValue != null ? JSON.parse(jsonValue) : null)
    } catch (e) {
      // read error
    }
  }

  // let updateToken = async ()=> {

  //     let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
  //         method:'POST',
  //         headers:{
  //             'Content-Type':'application/json'
  //         },
  //         body:JSON.stringify({'refresh':authTokens?.refresh})
  //     })

  //     let data = await response.json()

  //     if (response.status === 200){
  //         setAuthTokens(data)
  //         setUser(jwtDecode(data.access))
  //         AsyncStorage.setItem('authTokens', JSON.stringify(data))
  //     }else{
  //         logoutUser()
  //     }

  //     if(loading){
  //         setLoading(false)
  //     }
  // }

  let contextData = {
    user: user,
    // authTokens:authTokens,
    loginUser: loginUser,
    TESTgetUserData: TESTgetUserData,
    logoutUser:logoutUser,
  }


  // useEffect(()=> {

  //     if(loading){
  //         updateToken()
  //     }

  //     let fourMinutes = 1000 * 60 * 4

  //     let interval =  setInterval(()=> {
  //         if(authTokens){
  //             updateToken()
  //         }
  //     }, fourMinutes)
  //     return ()=> clearInterval(interval)

  // }, [authTokens, loading])

  // return(
  //     <AuthContext.Provider value={contextData} >
  //         {loading ? null : children}
  //     </AuthContext.Provider>
  // )

  return (
    <AuthContext.Provider value={contextData} >
      {children}
    </AuthContext.Provider>
  )
}