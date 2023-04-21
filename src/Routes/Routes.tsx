import React from 'react'
import {NativeRouter, Route, Link} from "react-router-native";
import LoginHome from "../components/Login/LoginHome";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from "../components/Login/content/SignUp";
import SignIn from "../components/Login/content/SignIn";


const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginHome} options={{ headerShown: false }}/>
            <Stack.Screen name="Inscription" component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="Connexion" component={SignIn} options={{ headerShown: false }}/>
        </Stack.Navigator>)
}

export default Routes;
