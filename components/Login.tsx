import { View, Text, StyleSheet, TextInput, Platform, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Lottie from 'lottie-react-native';
import { FireBaseApp } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { context } from './Context';

const SignIn = ({ navigation }) => {
    const auth = getAuth(FireBaseApp)
    const ctx = useContext(context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const loginUser = async () => {
        setError("")
        setIsLoading(true)
        try {
            const data = await signInWithEmailAndPassword(auth, email, password)
            setIsLoading(false)
            setEmail('')
            setPassword('')
            console.log({ data })
            // navigation.navigate("Login")
        } catch (err: any) {
            console.log(err)
            setError(err.message)
            setIsLoading(false)

        }
    }
    return (
        <View style={styles.container} >
            <View style={styles.loginContainer}>
                <Text style={styles.loginText}>Log-In</Text>

                <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.TextInput} placeholder="Email" />
                <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry style={styles.TextInput} placeholder="Password" />
                {

                    isLoading ? (

                        <TouchableOpacity onPress={loginUser} style={styles.loginButton}  >
                            <Lottie source={require("../assets/loading.json")} autoPlay />
                        </TouchableOpacity>
                    ) : (

                        <TouchableOpacity onPress={loginUser} style={styles.loginButton} ><Text style={{ color: "white" }}>
                            Login
                        </Text>
                        </TouchableOpacity>
                    )
                }

                {error && <Text style={{ color: "red" }}>{error}</Text>}
                <Text>Don't have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}  >
                    <Text style={{ color: 'blue' }}>Create one here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: 'flex'
    },
    loginContainer: {
        width: "85%",
        padding: 15,
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        gap: 10,
        borderRadius: 5,
        shadowColor: "#000",
        backgroundColor: "white",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,
        elevation: Platform.OS === 'android' ? 5 : 0,
    },
    loginText: {
        color: "green",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",

    },
    TextInput: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "white",
        fontSize: 15,
    },
    loginButton: {

        padding: 10,
        backgroundColor: "blue",
        borderRadius: 5,


    }

})
export default SignIn