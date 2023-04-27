import React, {useState} from 'react';
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
import Ionicons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const SignUp: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isClient, setIsClient] = useState<boolean>(true);
    const [isRevendeur, setIsRevendeur] = useState<boolean>(false);
    const regex = /^[^\s@]+@[^\s@]+\.(com|fr)$/i;

    // Gestion d'erreur

    const [errorEmail, setErrorEmail] = useState<boolean>(false)


    const navigation = useNavigation<NativeStackNavigationProp<any>>();


    const handleIsClient = () => {
        setIsClient(!isClient);
        setIsRevendeur(false)
    }
    const handleIsRevendeur = () => {
        setIsClient(false);
        setIsRevendeur(!isRevendeur)
    }


    const handleSubmit = () => {
        navigation.navigate("SuccessSignIn")
        // // Vérification de l'email
        // if (regex.test(email)) {
        //     console.log("l'adresse email est valide")
        //     // Verification du mot de passe (5 caractères mini / une majuscule)
        //     // appel axios
        // } else {
        //     console.log("l'adresse email est invalide")
        //     setErrorEmail(true)
        // }
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