import { createContext, useState, useEffect, useLayoutEffect } from 'react'
import { jwtDecode } from "jwt-decode";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {


  const [authTokens, setAuthTokens] = useState(async ()=> AsyncStorage.getItem('authTokens') ? await AsyncStorage.getItem('authTokens') : null);
  const [user, setUser] = useState(async ()=> AsyncStorage.getItem('authTokens') ? await AsyncStorage.getItem('authTokens') : null);

  const loginUser = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/authapi/token/', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({'username':event.target.username.value, 'password':event.target.password.value})
    });
    const data = await response.json();
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      try {
        AsyncStorage.setItem('authTokens', JSON.stringify(data));
      } catch(error) {
        console.log("Error saving tokens to async storage: " + error.message);
      }
    } else {
      console.log('The API returned error code '+ response.status);
    }
  }

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    AsyncStorage.removeItem('authTokens');
  }

  const TESTgetUserData = async () => {
    event.preventDefault();
    try {
      const jsonValue = await AsyncStorage.getItem('authTokens');
      console.log( jsonValue != null ? JSON.parse(jsonValue) : null)
    } catch(e) {
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
    user:user,
    // authTokens:authTokens,
    loginUser:loginUser,
    TESTgetUserData:TESTgetUserData
    // logoutUser:logoutUser,
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