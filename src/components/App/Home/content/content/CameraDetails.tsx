import React,{Suspense} from 'react';
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native';
// @ts-ignore
import {Camera, CameraType} from "expo-camera";
// @ts-ignore
import { Icon } from '@rneui/themed';
import D from "./3D";
import {Canvas } from "@react-three/fiber";
import Vuedimension from "./3D";


interface CameraDetailsProps {
    setShowCamera: React.Dispatch<React.SetStateAction<boolean>>;
}

// @ts-ignore
const CameraDetails :React.FC<CameraDetailsProps> = ({setShowCamera}) => {
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


            <Canvas >

                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense  fallback={null}>

                <Vuedimension/>
                </Suspense>

            </Canvas>
            <Text>ok</Text>
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
        backgroundColor:'red'
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