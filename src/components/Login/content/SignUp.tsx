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
    Keyboard, TouchableWithoutFeedback
} from "react-native";
import {RadioButton, Switch} from 'react-native-paper';


// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';
// @ts-ignore
import Icon from 'react-native-vector-icons/FontAwesome';

import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const SignUp: React.FC = () => {

    const [name, setName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [isClient, setIsClient] = useState<boolean>(true);
    const [isRevendeur, setIsRevendeur] = useState<boolean>(false);

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


    console.log(password)
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={"dark-content"}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <View style={styles.headerLogo}/>
                    <Text style={styles.headerTitle}>Inscription</Text>
                    <Text onPress={() => navigation.navigate("Connexion")} style={styles.headerSignIn}>Connexion</Text>
                </View>

                <View style={{marginTop: 30}}>
                    <TextInput
                        style={styles.input}
                        placeholder={"Nom"}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        autoComplete={"email"}
                        placeholder={"Email"}
                        onChangeText={setEmail}
                        autoCapitalize={"none"}


                    />
                    <View style={
                      styles.inputPassword
                    }>
                        <TextInput
                            style={{width:"95%"}}
                            autoComplete={"password"}
                            placeholder={"Mot de passe"}
                            onChangeText={setPassword}
                            autoCapitalize={"none"}
                            secureTextEntry={showPassword}

                        />
                        <TouchableOpacity onPress={()=>setShowPassword(!showPassword)}>
                            <Icon  name={showPassword ? 'eye-slash' : 'eye'} size={20} color="grey"/>
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
                        <Pressable style={styles.buttonSignUp}><Text
                            style={styles.buttonText}>S'inscrire</Text></Pressable>
                        <Pressable><Text>Mot de passe oublié ?</Text></Pressable>
                    </View>

                </View>
            </View>
                </TouchableWithoutFeedback >

        </SafeAreaView>
    );
};


const styles = StyleSheet.create(
    {
        statusBar: {
            color: "black"
        },
        header: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 30,
            alignItems: "center",
        },
        headerTitle: {
            fontSize: 40,
            width: "65%",
            textAlign: "center"
        },
        headerSignIn: {
            color: "#BEAA6F",
            width: "15%",
            fontSize: 11
        },
        headerLogo: {
            width: "15%",


        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 0.2,
            borderColor: "#BDBDBD",
            borderRadius: 10,
            padding: 10,

        },
        inputPassword: {
            height: 40,
            margin: 12,
            padding: 10,
            flexDirection: 'row', alignItems: 'center',
            borderWidth: 0.2,
            borderColor: "#BDBDBD",
            borderRadius: 10,
        },
        toggle: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        },
        containerButton: {
            display: "flex",
            alignItems: "center",
            marginTop: 30,
            height: 80,
            justifyContent: "space-between"
        },
        buttonSignUp: {
            borderRadius: 30,
            backgroundColor: "#BEAA6F",
            height: 50,
            width: "90%",
            display: "flex",
            justifyContent: "center",

            alignItems: "center"
        },
        buttonText: {
            textAlign: "center",
            color: "#ffff",
            fontWeight: "bold",
        }

    }
)
export default SignUp;