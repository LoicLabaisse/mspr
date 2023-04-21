import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from "react-native";

const SignIn : React.FC = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={"dark-content"}/>
            <View style={{flex: 1, backgroundColor: "red"}}>
               <Text>Connexion</Text>
            </View>

        </SafeAreaView>
    );
};

export default SignIn;