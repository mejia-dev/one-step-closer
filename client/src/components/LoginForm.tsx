import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Text, View } from 'react-native'

const LoginForm = () => {
    const {loginUser} = useContext(AuthContext);
    return (
        <View>
            <form onSubmit={loginUser}>
                <input type="text" name="username" placeholder="Enter Username" />
                <input type="password" name="password" placeholder="Enter Password" />
                <input type="submit"/>
            </form>
        </View>
    )
}

export default LoginForm;