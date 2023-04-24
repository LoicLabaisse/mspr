import React from 'react';
import { TouchableOpacity, View,Text,StyleSheet } from 'react-native';
// @ts-ignore
import {Camera, CameraType} from "expo-camera";
// @ts-ignore
import { Icon } from '@rneui/themed';



// @ts-ignore
const CameraDetails = ({setShowCamera}) => {
    return (
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
        </Camera>
    );


};



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
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