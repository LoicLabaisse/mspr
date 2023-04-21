import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Routes from "./src/Routes/Routes";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";

const App: React.FC = () => {
    return (

            <NavigationContainer>
                <Routes/>
            </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default App