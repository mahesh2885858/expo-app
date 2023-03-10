import React from 'react'
import { Button, Text, View } from 'react-native'
const ProfileScreen = (props: any) => {
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        ><Text style={{ color: "black" }} >This is profile page</Text>
            <Button title='go to home' onPress={(e) => { props.navigation.navigate("Home") }} />
        </View>
    )
}

export default ProfileScreen