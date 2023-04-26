import React, {useEffect, useState} from 'react'
import {NativeRouter, Route, Link} from "react-router-native";
import LoginHome from "../components/Login/LoginHome";
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import SignUp from "../components/Login/content/SignUp";
import SignIn from "../components/Login/content/SignIn";
import MyTabs from "./App.route";
import {useNavigation} from "@react-navigation/native";
import ProductDetails from "../components/App/Home/content/ProductDetails";
import CameraQrCode from "../components/Login/content/content/CameraQRCode";


const Stack = createNativeStackNavigator();


const Routes: React.FC = () => {

    const [isAuthenticated,setIsAuthenticated]= useState<boolean>(true);
    const navigation = useNavigation<NativeStackNavigationProp<any>>();    useEffect(()=> {
       if(!isAuthenticated){
           navigation.navigate("Login")
       }else{
           navigation.navigate("Home")
       }
    })

    return (
        <Stack.Navigator >
            <Stack.Screen name="Login" component={LoginHome} options={{ headerShown: false }}/>
            <Stack.Screen name="Inscription" component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="Connexion" component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={MyTabs}  options={{ headerBackVisible: false,headerShown: false }}/>
            <Stack.Screen name="QRCode" component={CameraQrCode} options={{ headerShown: false }}/>



        </Stack.Navigator>)
}

export default Routes;
