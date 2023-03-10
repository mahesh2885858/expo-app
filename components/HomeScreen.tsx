import React, { useContext } from 'react'
import { Button, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { context } from './Context'

const HomeScreen = ({ navigation }: { navigation: any }) => {
    const ctx = useContext(context)
    return (
        <View style={styles.container}><Text style={{ color: "black" }} >This is Home page</Text>
            <Button title='go to profile' onPress={(e) => { navigation.navigate("Profile") }} />
            <TouchableOpacity onPress={() => ctx.setIsLoggedIn(false)} style={styles.singInButton} ><Text style={{ color: "black" }}>
                Logout
            </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container:
    {
        width: "100%",
        height: "100%",
        display: "flex",
        gap: 10,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"

    },
    singInButton: {

        padding: 10,
        backgroundColor: "#cdcdcd",
        borderRadius: 5,

    }
})
export default HomeScreen