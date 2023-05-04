import React, {useContext, useState} from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StatusBar,
    StyleSheet,
    TextInput,
    Pressable,
    TouchableOpacity,
    Keyboard, TouchableWithoutFeedback, Alert
} from "react-native";
import {RadioButton, Switch} from 'react-native-paper';
import styles from "./SignInStyle";
// @ts-ignore
import {REACT_APP_API} from "@env"


// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import axios from "axios";
import {StatusContext} from "../../../Context/Context";

const SignUp: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isClient, setIsClient] = useState<boolean>(true);
    const [isRevendeur, setIsRevendeur] = useState<boolean>(false);
    const regex = /^[^\s@]+@[^\s@]+\.(com|fr)$/i;


    // Gestion d'erreur

    const [errorEmail, setErrorEmail] = useState<boolean>(false)


    const navigation = useNavigation<NativeStackNavigationProp<any>>();





    const handleSubmit = () => {

     // Appel axios

        axios.post(`${REACT_APP_API}user/login`, {
            email: email,
            name: name
        }).then(r => {
            if(r.status === 200){


                navigation.navigate("SuccessSignIn")
            }
        }).catch(e => console.log(e))
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={"dark-content"}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1}}>
                    <View style={styles.header}>
                        <View style={styles.headerLogo}/>
                        <Text style={styles.headerTitle}>Inscription</Text>
                        <Text onPress={() => navigation.navigate("Connexion")}
                              style={styles.headerSignIn}>Connexion</Text>
                    </View>

                    <View style={{marginTop: 30}}>
                        <TextInput
                            style={styles.input}
                            placeholder={"Nom"}
                            onChangeText={setName}
                        />

                        {
                            errorEmail && (
                                <Text style={styles.errorText}>Votre email est invalide</Text>
                            )
                        }

                        <TextInput
                            style={styles.input}
                            autoComplete={"email"}
                            placeholder={"Email"}
                            onChangeText={setEmail}
                            onChange={() => setErrorEmail(false)}
                            autoCapitalize={"none"}
                            keyboardType={"email-address"}


                        />


                        <View style={styles.containerButton}>
                            <Pressable onPress={handleSubmit} style={styles.buttonSignUp}><Text
                                style={styles.buttonText}>S'inscrire</Text></Pressable>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );
};


export default SignUp;