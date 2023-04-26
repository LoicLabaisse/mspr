import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../../components/App/Home/HomeScreen";
import ProductDetails from "../../components/App/Home/content/ProductDetails";

export const HomeNavigation = () => {

    const HomeStack = createNativeStackNavigator()
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="ProductsDetails" component={ProductDetails}
                              options={ {headerTitle:"", headerShadowVisible:false}}/>
        </HomeStack.Navigator>
    );
};
