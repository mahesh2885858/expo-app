import { View, Text, StyleSheet, TextInput, Platform, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import Lottie from 'lottie-react-native';
import { FireBaseApp } from '../utils/firebaseConfig';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { context } from './Context';

const SignIn = ({ navigation }) => {
    const auth = getAuth(FireBaseApp)
    const ctx = useContext(context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const signupUser = async () => {
        setError("")
        setIsLoading(true)
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            setIsLoading(false)
            setEmail('')
            setPassword('')
            navigation.navigate("Login")
        } catch (err: any) {
            console.log(err)
            setError(err.message)
            setIsLoading(false)

        }
    }
    return (
        <View style={styles.container} >
            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Sign In</Text>

                <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.TextInput} placeholder="Email" />
                <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry style={styles.TextInput} placeholder="Password" />
                {

                    isLoading ? (

                        <TouchableOpacity onPress={signupUser} style={styles.singInButton}  >
                            <Lottie source={require("../assets/loading.json")} autoPlay />
                        </TouchableOpacity>
                    ) : (

                        <TouchableOpacity onPress={signupUser} style={styles.singInButton} ><Text style={{ color: "white" }}>
                            SignIn
                        </Text>
                        </TouchableOpacity>
                    )
                }

                {error && <Text style={{ color: "red" }}>{error}</Text>}
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}  >
                    <Text style={{ color: 'blue' }}>Login here</Text>
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
    signInContainer: {
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
    signInText: {
        color: "red",
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
    singInButton: {

        padding: 10,
        backgroundColor: "blue",
        borderRadius: 5,


    }

})
export default SignIn