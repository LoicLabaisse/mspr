import React, {useState} from 'react';
import {
    Alert,
    Keyboard, Pressable,
    SafeAreaView,
    StatusBar, StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from "react-native";
import {Switch} from "react-native-paper";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
// @ts-ignore
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./SignInStyle";

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    // Gestion d'erreur
    const [errorBoth, setErrorBoth] = useState<boolean>(false)
    const [errorPassword, setErrorPassword] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)


    const [showPassword, setShowPassword] = useState<boolean>(true)


    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const handleSubmit = () => {


        if (email === "" || password === "") {
            console.log("Veuillez rentrer vos identifiants")
            setErrorBoth(true)
        } else {
            console.log(email)
            console.log(password)
            navigation.navigate("Home")
        }


        // Appel axios + vérification des status
    }
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={"dark-content"}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1}}>
                    <View style={styles.header}>
                        <View style={styles.headerLogo}/>
                        <Text style={styles.headerTitle}>Connexion</Text>
                        <Text onPress={() => navigation.navigate("Inscription")}
                              style={styles.headerSignIn}>Inscription</Text>
                    </View>

                    <View style={{marginTop: 30}}>
                        {
                            errorBoth && (
                                <Text style={styles.errorText}>Veuillez rentrer vos identifiants</Text>
                            )
                        }

                        {
                            errorEmail && (
                                <Text style={styles.errorText}>Votre email est invalide</Text>
                            )
                        }

                        <TextInput
                            style={styles.input}
                            autoComplete={"email"}
                            placeholder={"Email"}
                            keyboardType={"email-address"}
                            onChangeText={setEmail}
                            onChange={() => {
                                setErrorEmail(false);
                                setErrorBoth(false)
                            }}
                            autoCapitalize={"none"}


                        />

                        {
                            errorPassword && (
                                <Text style={styles.errorText}>Votre mot de passe est incorrect</Text>
                            )
                        }
                        <View style={
                            styles.inputPassword
                        }>

                            <TextInput
                                style={{width: "95%"}}
                                autoComplete={"password"}
                                placeholder={"Mot de passe"}
                                onChange={() => {
                                    setErrorPassword(false);
                                    setErrorBoth(false)
                                }}
                                onChangeText={setPassword}
                                autoCapitalize={"none"}
                                secureTextEntry={showPassword}

                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="grey"/>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerButton}>
                            <Pressable onPress={handleSubmit} style={styles.buttonSignUp}><Text
                                style={styles.buttonText}>Connexion</Text></Pressable>
                            <Pressable><Text>Mot de passe oublié ?</Text></Pressable>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );


};


export default SignIn;