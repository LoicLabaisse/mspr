import React from 'react';
import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

const Container = ({children, color}) => {
    return <SafeAreaView style={{
        flex: 1,
        backgroundColor: color,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }}>{children}
        <StatusBar barStyle={"dark-content"}/>
    </SafeAreaView>;
};


export default Container;







