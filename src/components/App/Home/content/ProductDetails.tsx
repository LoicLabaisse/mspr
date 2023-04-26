import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, ImageBackground} from "react-native";
import Container from "../../Reusable/Container";
import {Camera, CameraType} from "expo-camera";
import CameraDetails from "./CameraDetails";


// @ts-ignore
const ProductDetails: React.FC = ({route}) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    const [type, setType] = useState(CameraType.back);


    const {property, image} = route.params


    // Fonction pour ouvrir l'appareil photo
    const handlePermission = async () => {
        // @ts-ignore
        let status = Camera.requestCameraPermissionsAsync().then(r => setHasPermission(r.status));

        setTimeout(() => {
            setShowCamera(true)
        }, 1000)

    };

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <>

            <Container color={showCamera ? "black" : "white"}>
                {
                    showCamera ? <CameraDetails setShowCamera={setShowCamera}/> :
                        <View style={styles.container}>
                            <View style={styles.container_header}>
                                <Text style={styles.title}>{property.title}</Text>
                                <View style={styles.image_box}>
                                    <ImageBackground source={{uri: image}} resizeMode="center" style={styles.image}/>
                                </View>
                            </View>

                            <View style={styles.details}>
                                <Text> <Text style={{fontWeight: "bold"}}>Prix</Text> : {property.details.price}€</Text>
                                <Text><Text
                                    style={{fontWeight: "bold"}}>Description</Text> : {property.details.description}
                                </Text>
                                <Text><Text style={{fontWeight: "bold"}}>Color </Text>: {property.details.color}</Text>
                                <Text><Text style={{fontWeight: "bold"}}>Stock </Text>: {property.stock}</Text>
                            </View>

                            <View style={styles.containerButton}>
                                <Pressable onPress={handlePermission} style={styles.button}><Text
                                    style={styles.textButton}>Vision
                                    en 3D</Text></Pressable>
                            </View>


                        </View>

                }
            </Container>

        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        fontWeight: "500",
        marginBottom: 30,
    },
    container_header: {
        display: "flex",
        alignItems: "center"
    },
    image_box: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    details: {
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
        marginTop: 30,
        height: 150
    },
    button: {
        borderRadius: 30,
        backgroundColor: "#BEAA6F",
        height: 50,
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    containerButton: {
        display: "flex",
        alignItems: "center",
        marginTop: 30,
        height: 80,
        justifyContent: "space-between"
    },
    textButton: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})

export default ProductDetails;