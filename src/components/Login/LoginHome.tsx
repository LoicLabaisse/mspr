import React, {useContext, useState} from 'react'
import {Pressable, SafeAreaView, StyleSheet, Text, View,Image} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {StatusContext} from "../../Context/Context";


const LoginHome: React.FC = () => {

    const navigation = useNavigation()

    const {isLogin}= useContext(StatusContext)

    console.log(isLogin)

    const handleSignUp = ()=> {
        // @ts-ignore
        navigation.navigate("Inscription")
    }
    const handleSignIn = ()=> {
        // @ts-ignore
        navigation.navigate("Connexion")
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: "#BEAA6F"}}>
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                        style={styles.logo}
                        source={require('../../assets/images/logoPTK.png')}
                    />
                </View>
                <View style={styles.containerButton}>
                    <Pressable style={styles.button}><Text style={styles.buttonText} onPress={handleSignIn} >Connexion</Text></Pressable>
                   <Pressable style={styles.button}><Text style={styles.buttonText} onPress={handleSignUp}>Inscription</Text></Pressable>
                </View>
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#BEAA6F",
        display: "flex",
        flexDirection: "column"
    },
    containerLogo: {
        display:"flex",
        justifyContent:"center",
        flex:2,
    },
    logo:{
        width:"100%",
    },
    containerButton: {
        display: "flex",
        flex:2,
        alignItems:"center"
    },
    button: {
        borderRadius: 30,
        backgroundColor: "#3F2E00",
        height: 50,
        width: "90%",
        display:"flex",
        justifyContent:"center",
        marginTop:10
    },
    buttonText:{
        textAlign: "center",
        color: "#ffff",
        fontWeight: "bold",
    }
})


export default LoginHome