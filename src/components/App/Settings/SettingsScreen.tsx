import React, {useContext, useState} from 'react';
import {Text, View, StyleSheet, Switch, Pressable} from "react-native";
import Container from "../Reusable/Container";
import {Icon} from "@rneui/themed";
import {StatusContext, TokenContext} from "../../../Context/Context";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const SettingsScreen: React.FC = () => {

    const {setIsLogin}= useContext(StatusContext)
    const {setToken}= useContext(TokenContext)
    const navigation = useNavigation<NativeStackNavigationProp<any>>();


    const handleDeconnect = ()=>{
        setToken("");
        setIsLogin(false);
        navigation.navigate('Login');

    }
    return (
        <Container color={"white"}>
            <Text style={styles.title}>Paramètres</Text>

                <View style={styles.option}>
                    <Text style={styles.optionText}>Se deconnecter</Text>
                    <Pressable onPress={handleDeconnect}>
                    <Icon name={"logout"} color={"red"} />
                    </Pressable>

                </View>

        </Container>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 30,

    },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        option: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
            paddingHorizontal: 20,
            width: '100%',
        },
        optionText: {
            fontSize: 18,
            marginRight: 'auto',
        },
    })


export default SettingsScreen;