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
    const [password, setPassword] = useState<string>("");
    const [isClient, setIsClient] = useState<boolean>(true);
    const [isRevendeur, setIsRevendeur] = useState<boolean>(false);
    const regex = /^[^\s@]+@[^\s@]+\.(com|fr)$/i;
    const regexMajuscule = /^(?=.*[A-Z]).{5,}$/;

    // Gestion d'erreur

    const [errorPassword, setErrorPassword] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)
    const [errorStatus,setErrorStatus]= useState<boolean>(false)


    const [showPassword, setShowPassword] = useState<boolean>(true)


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

        // Vérification du status Client ou Revendeur
        if(!isClient && !isRevendeur){
            Alert.alert('Attention !', 'Tu doit avoir au moins un status pour pouvoir continuer ( Client / Revendeur )', [
                {
                    text: 'Annuler',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }else{
            // Vérification de l'email
            if (regex.test(email)) {
                console.log("l'adresse email est valide")
                // Verification du mot de passe (5 caractères mini / une majuscule)
                if (regexMajuscule.test(password)) {
                    console.log("le mot de passe est valide")
                    // appel axios du back
                } else {
                    console.log("le mot de passe n'est pas valide")
                    setErrorPassword(true)
                }

            } else {
                console.log("l'adresse email est invalide")
                setErrorEmail(true)
            }
        }


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
                            onChange={()=>setErrorEmail(false)}
                            autoCapitalize={"none"}
                            keyboardType={"email-address"}


                        />

                        {
                            errorPassword && (
                                <Text style={styles.errorText}>Votre mot de passe doit faire plus de 5 caractères et doit
                                    contenir une
                                    majuscule</Text>
                            )
                        }
                        <View style={
                            styles.inputPassword
                        }>

                            <TextInput
                                style={{width: "95%"}}
                                autoComplete={"password"}
                                placeholder={"Mot de passe"}
                                onChange={()=>setErrorPassword(false)}
                                onChangeText={setPassword}
                                autoCapitalize={"none"}
                                secureTextEntry={showPassword}

                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="grey"/>
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-around",
                            marginTop: 20
                        }}>
                            <View style={styles.toggle}>

                                <Text>Client : </Text>
                                <Switch color={"#BEAA6F"} value={isClient} onValueChange={handleIsClient}/>
                            </View>
                            <View style={styles.toggle}>
                                <Text>Revendeur: </Text>
                                <Switch color={"#BEAA6F"} value={isRevendeur} onValueChange={handleIsRevendeur}/>
                            </View>
                        </View>

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