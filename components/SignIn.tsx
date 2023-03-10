import { View, Text, StyleSheet, TextInput, Platform, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { context } from './Context';
const SignIn = () => {
    const ctx = useContext(context)
    console.log(ctx)
    return (
        <View style={styles.container} >
            <View style={styles.signInContainer}>
                <Text style={styles.signInText}>Sign In</Text>

                <TextInput style={styles.TextInput} placeholder="Username" />
                <TextInput style={styles.TextInput} placeholder="Email" />
                <TextInput secureTextEntry style={styles.TextInput} placeholder="Password" />
                <TouchableOpacity onPress={() => ctx.setIsLoggedIn(true)} style={styles.singInButton} ><Text style={{ color: "white" }}>
                    SignIn
                </Text>
                </TouchableOpacity>

                <Text>Already have an account? </Text>
                <TouchableOpacity  >
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