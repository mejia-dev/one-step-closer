import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { Text, View, StyleSheet } from 'react-native'

const LoginForm = () => {
    const { loginUser } = useContext(AuthContext);
    return (
        <View style={styles.background}>
            <Text style={styles.header}>Please Log In</Text>
            <form onSubmit={loginUser} style={styles.form}>
                <input type="text" name="username" placeholder="Enter Username" style={styles.formItem} />
                <input type="password" name="password" placeholder="Enter Password" style={styles.formItem} />
                <input type="submit" style={styles.formItem} />
            </form>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        backgroundColor: '#00365C',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    form: {
        display: "flex",
        flexDirection: "column"
    },
    formItem: {
        padding: 10,
        margin: 5,
        borderRadius: 5,
    },
    header: {
        fontSize: 30,
        color: "white",
        textAlign: "center"
    }
});

export default LoginForm;