import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {Camera} from 'expo-camera';
import {BarCodeScanner, BarCodeScannedCallback} from 'expo-barcode-scanner';
import {Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {color} from "@rneui/base";

const CameraQrCode: React.FC = () => {
    const [hasPermission, setHasPermission] = useState<boolean | any>(null);
    const [scanned, setScanned] = useState<boolean>(false);

    const navigation = useNavigation<NativeStackNavigationProp<any>>();


    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);
    const handleBarCodeScanned :BarCodeScannedCallback = ({type, data}) => {
        setScanned(true)

        // mettre tous le system de redirection ect verification du token ici
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    navigation.navigate("Inscription")
                }}
            >


                <Icon style={styles.text} color={"white"} name={"close"}/>
            </TouchableOpacity>
            <View style={styles.containerContent}>

            <View style={styles.qrcode}>

                <Text style={styles.qrcode_text}>Scan ton Qr Code</Text>
            </View>
            </View>
            {scanned && <Button title={'Cliquer pour re-scanner'} onPress={() => setScanned(false)}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    camera: {
        flex: 1,
    },

    button: {

        marginTop:40,
        padding: 20,
        borderRadius: 10,
        display:"flex",
        alignItems:"flex-end"
    },
    text: {
        fontSize: 18,
        color: 'white',
        width:30
    },
    containerContent:{
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        height:"70%"
    },
    qrcode:{
        width:300,
        height:300,
        borderTopLeftRadius: 10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        borderWidth:0.2,
        borderStyle:"solid",
        borderColor:"white"

    },
    qrcode_text:{
        color:"white",
        textAlign:"center",
        fontSize:16
    }

});


export default CameraQrCode;