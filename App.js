import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./components/HomeScreen"
import ProfileScreen from "./components/ProfileScreen"
import SignIn from './components/SignIn';
import { context } from './components/Context';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  return (
    <context.Provider value={{ setIsLoggedIn }} >

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={isLoggedIn ? HomeScreen : SignIn}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </context.Provider>
  );
};
export default MyStack