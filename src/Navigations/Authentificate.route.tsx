import React, {useContext, useEffect, useState} from 'react'
import {NativeRouter, Route, Link} from "react-router-native";
import LoginHome from "../components/Login/LoginHome";
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import SignUp from "../components/Login/content/SignUp";
import SignIn from "../components/Login/content/SignIn";
import MyTabs from "./App.route";
import {useNavigation} from "@react-navigation/native";
import ProductDetails from "../components/App/Home/content/content/ProductDetails";
import CameraQrCode from "../components/Login/content/content/CameraQRCode";
import SuccessSignUp from "../components/Login/content/content/SuccessSignUp";
import {StatusContext} from "../Context/Context";


const Stack = createNativeStackNavigator();


const Routes: React.FC = () => {

    const {isLogin}= useContext(StatusContext)
    const navigation = useNavigation<NativeStackNavigationProp<any>>();


    useEffect(()=> {
        if(isLogin){
            navigation.navigate("Home")
        }else{
            navigation.navigate("Login")

        }
    },[])


    return (
        <Stack.Navigator >
            <Stack.Screen name="Login" component={LoginHome} options={{ headerShown: false }}/>
            <Stack.Screen name="Inscription" component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="Connexion" component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={MyTabs}  options={{ headerBackVisible: false,headerShown: false }}/>
            <Stack.Screen name="QRCode" component={CameraQrCode} options={{ headerShown: false }}/>
            <Stack.Screen name="SuccessSignIn" component={SuccessSignUp} options={{ headerShown: false }}/>
        </Stack.Navigator>)
}

export default Routes;
