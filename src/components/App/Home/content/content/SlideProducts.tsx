import React from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {IProducts} from "../../../interface/products.interface";


const SlideProducts:React.FC<IProducts | any>= (props, context) => {


    const navigation = useNavigation<NativeStackNavigationProp<any>>();



    return (
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>



                            <TouchableOpacity

                                onPress={() => navigation.navigate("ProductsDetails", {property: props , image:props.image})}>
                                <View>

                                    <View>
                                        <Image
                                            style={styles.item}
                                            source={{ uri: props.image }}/>
                                        <Text  style={styles.productsBox}>{props.name}</Text>
                                        <Text>{props.details.price}€</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>





        </ScrollView>
    );
};
const styles = StyleSheet.create({

    container: {
        margin: 10,
        marginBottom: 30
    },
    item: {
        backgroundColor: '#f6f6f6',
        padding: 20,
        marginVertical: 8,
        width: 110,
        height: 110,
        borderRadius: 10,
        marginRight: 10,
    },
    item_title: {
        fontSize: 20,
        fontWeight: "500"
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        textAlign: "center",
        marginBottom: 30,
    },
    productsBox:{
        width: 110,
    }
});

export default SlideProducts;