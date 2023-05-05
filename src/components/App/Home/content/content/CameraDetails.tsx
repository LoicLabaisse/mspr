import React,{Suspense} from 'react';
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native';
// @ts-ignore
import {Camera, CameraType} from "expo-camera";
// @ts-ignore
import { Icon } from '@rneui/themed';
import D from "./3D";
import {Canvas } from "@react-three/fiber";
import Vuedimension from "./3D";




// @ts-ignore
const CameraDetails :React.FC = ({setShowCamera}) => {
    return (
        <View style={styles.container}>
        <Camera style={styles.camera}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        setShowCamera(false);
                    }}
                >
                    <Icon style={styles.text} color={"white"} name={"close"}/>
                </TouchableOpacity>

            </View>


            <Canvas>
                <ambientLight/>
                <pointLight position={[10,10,10]}/>
                <Vuedimension position={[0, 0, 0]}/>
            </Canvas>
        </Camera>
        </View>
    );
};



const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'column',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    button: {

        padding: 20,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
});

export default CameraDetails;