import React, {useContext, useEffect, useState} from 'react';
import {View,Text} from "react-native";
import axios from "axios";
import {TokenContext} from "../../../../Context/Context";

const ViewRevendeur : React.FC = () => {

    const [client,setClient]= useState<string>("")
    const {token} = useContext(TokenContext);



    useEffect(() => {

        if (token !== "") {

        }

    }, [])
    return (
        <View>
            <Text>Revendeur</Text>
        </View>
    );
};

export default ViewRevendeur;