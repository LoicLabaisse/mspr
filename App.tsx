import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Routes from "./src/Navigations/Authentificate.route";
import {NavigationContainer} from "@react-navigation/native";
import React, {useState, useContext, createContext} from "react";
import {StatusContext, TokenContext } from './src/Context/Context';

const App: React.FC = () => {
    const [token, setToken] = useState("");
    const [client, setClient] = useState<boolean>(true);
    const [revendeur, setRevendeur] = useState<boolean>(false);
    const userContextValues = {
        client,
        revendeur,
        setClient,
        setRevendeur,
    };

    return (

        <NavigationContainer>
            <TokenContext.Provider value={{token,setToken}}>
                <StatusContext.Provider value={userContextValues}>
            <Routes/>
                </StatusContext.Provider>
            </TokenContext.Provider>
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