import React from 'react';
import {View, Text, Pressable} from "react-native";
import styles from "../SignInStyle";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import Container from "../../../App/Reusable/Container";

const SuccessSignUp :React.FC = () => {


    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    return (
        <Container  color={undefined}>
        <View style={{flex: 1 ,display:"flex", justifyContent:"center"}}>


            <View style={{ height:300 , display:"flex", justifyContent:"space-around"}}>

            <Text style={{fontSize:20 , color:"green",textAlign:"center" }}>Vous êtes bien inscrit ! </Text>
            <Text  style={{fontSize:16,textAlign:"center" }} > Scannez le QR Code que vous avez reçu par mail </Text>

            <View style={styles.containerButton}>
                <Pressable onPress={()=> navigation.navigate("QRCode")} style={styles.buttonSignUp}><Text
                    style={styles.buttonText}>Scan QR Code</Text></Pressable>
            </View>
            </View>
        </View>
        </Container>
    );
};

export default SuccessSignUp;