import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import SlideProducts from "./content/SlideProducts";
import axios from "axios";
import {TokenContext} from "../../../../Context/Context";
import {IProducts} from "../../interface/products.interface";
import Constants from"expo-constants"
// @ts-ignore
import {REACT_APP_API} from "@env"

const ViewClient :React.FC = () => {

    const [noToken, setNoToken] = useState<boolean>(false)
    const {token} = useContext(TokenContext);
    const [products, setProducts] = useState<Array<IProducts>>([])


    // @ts-ignore
    const apiUrl = Constants.expoConfig.extra.apiUrl;

    useEffect(() => {

        if (token !== "") {
            // @ts-ignore
            axios.post(`${REACT_APP_API}products/findAll`,{},{
                headers: {
                    'Authorization': token
                }
            }).then(r => setProducts(r.data.Data[0])).catch(error => console.log(error.message))
        } else {
            setNoToken(true)
        }

    }, [])

    const CoffeeMachineImages = [
        'https://st2.depositphotos.com/1006753/7917/i/600/depositphotos_79175894-stock-photo-red-coffee-machine.jpg',
        'https://static4.depositphotos.com/1013245/356/i/600/depositphotos_3561181-stock-photo-modern-coffee-machine-maker-isolated.jpg',
        'https://st3.depositphotos.com/1177973/13892/i/600/depositphotos_138923110-stock-photo-modern-coffee-machine.jpg',
        'https://static9.depositphotos.com/1059523/1091/i/600/depositphotos_10913385-stock-photo-black-coffee-maker.jpg',
        'https://st2.depositphotos.com/1000415/6714/i/600/depositphotos_67145081-stock-photo-coffee-machine.jpg',
        "https://st3.depositphotos.com/7221444/16603/i/600/depositphotos_166033946-stock-photo-black-espresso-maker.jpg",
        "https://st4.depositphotos.com/1766687/20621/i/600/depositphotos_206218676-stock-photo-coffee-maker-isolated-white-background.jpg," +
        "https://st.depositphotos.com/1004328/1281/i/600/depositphotos_12811227-stock-photo-coffee-machine-and-cup.jpg",
        "https://st2.depositphotos.com/1000415/6714/i/600/depositphotos_67145121-stock-photo-coffee-machine.jpg",
        "https://st.depositphotos.com/1034582/3689/i/600/depositphotos_36892653-stock-photo-coffee-machine.jpg"
    ];

    return (
        <View>
            <Text style={styles.item_title}>Produits</Text>

            <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}
                        horizontal={true}>
                {
                    products.map((m, index) => {

                        if (index < 10) {
                            return <View key={index}>
                                <SlideProducts createdAt={m.createdAt} details={m.details}
                                               id={m.id}
                                               name={m.name}
                                               stock={m.stock}
                                               image={CoffeeMachineImages[Math.floor(Math.random() * 5)]}/>
                            </View>
                        } else {
                            return null
                        }

                    })
                }
            </ScrollView>
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}
                        horizontal={true}>
                {
                    products.map((m, index) => {

                        if (index >= 10 && index < 20) {
                            return <View key={index}>
                                <SlideProducts createdAt={m.createdAt} details={m.details}
                                               id={m.id}
                                               name={m.name}
                                               stock={m.stock}
                                               image={CoffeeMachineImages[Math.floor(Math.random() * 5)]}/>
                            </View>
                        } else {
                            return null
                        }

                    })
                }
            </ScrollView>
            <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}
                        horizontal={true}>
                {
                    products.map((m, index) => {

                        if (index >= 20 && index < 30) {
                            return <View key={index}>
                                <SlideProducts createdAt={m.createdAt} details={m.details}
                                               id={m.id}
                                               name={m.name}
                                               stock={m.stock}
                                               image={CoffeeMachineImages[Math.floor(Math.random() * 5)]}/>
                            </View>
                        } else {
                            return null
                        }

                    })
                }
            </ScrollView>

        </View>
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
    productsBox: {
        width: 110,
    }
});

export default ViewClient;