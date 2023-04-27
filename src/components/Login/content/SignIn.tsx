import React, {useContext, useState} from 'react';
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
import {StatusContext} from "../../../Context/Context";

const SignIn: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const {client,setClient} = useContext(StatusContext)
    const {revendeur,setRevendeur} = useContext(StatusContext)


    // Gestion d'erreur
    const [errorBoth, setErrorBoth] = useState<boolean>(false)
    const [errorPassword, setErrorPassword] = useState<boolean>(false)
    const [errorEmail, setErrorEmail] = useState<boolean>(false)


    const [showPassword, setShowPassword] = useState<boolean>(true)

    const handleIsClient = () => {
        setClient(true);
        setRevendeur(false)
    }
    const handleIsRevendeur = () => {
        setClient(false);
        setRevendeur(true)
    }

    console.log(client)

    console.log(revendeur)

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

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


                        <Text style={{textAlign:"center"}}>Choisissez votre status :</Text>

                        <View style={styles.containerButton}>
                            <View style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 20,
                                width:"80%"
                            }}>
                                <View style={styles.toggle}>

                                    <Text>Client : </Text>
                                    <Switch color={"#BEAA6F"} value={client} onValueChange={handleIsClient}/>
                                </View>
                                <View style={styles.toggle}>
                                    <Text>Revendeur: </Text>
                                    <Switch color={"#BEAA6F"} value={revendeur} onValueChange={handleIsRevendeur}/>
                                </View>
                            </View>
                            <Pressable onPress={()=> navigation.navigate("QRCode")} style={styles.buttonSignUp}><Text
                                style={styles.buttonText}>Connexion</Text></Pressable>
                        </View>

                    </View>
                </View>
            </TouchableWithoutFeedback>

        </SafeAreaView>
    );


};


export default SignIn;