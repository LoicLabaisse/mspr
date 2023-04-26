import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SectionList, ScrollView, Image, TouchableOpacity} from 'react-native';
import Container from "../Reusable/Container";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {IProducts} from "../interface/products.interface";
import axios from "axios";
import SlideProducts from "./content/SlideProducts";

const HomeScreen: React.FC = () => {

    const [products, setProducts] = useState<Array<IProducts>>([])


    useEffect(() => {
        axios.post("http://ec2-3-91-173-134.compute-1.amazonaws.com:4200/products/findAll").then(r => setProducts(r.data.Data[0])).catch(error => console.log(error))
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
        <Container color={"white"}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={{
                    padding: 10
                }}>

                    <Text style={styles.title}>Accueil</Text>
                    <Text style={styles.item_title}>Produits</Text>

                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>
                    {
                        products.map((m, index) => {

                            if (index < 10) {
                                return <>
                                    <SlideProducts createdAt={m.createdAt} details={m.details} id={m.id} name={m.name}
                                                   stock={m.stock} image={CoffeeMachineImages[Math.floor(Math.random() * 5)]}/>
                                </>
                            } else {
                                return null
                            }

                        })
                    }
                    </ScrollView>
                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>
                        {
                            products.map((m, index) => {

                                if (index >= 10 && index < 20) {
                                    return <>
                                        <SlideProducts createdAt={m.createdAt} details={m.details} id={m.id} name={m.name}
                                                       stock={m.stock} image={CoffeeMachineImages[Math.floor(Math.random() * 5)]}/>
                                    </>
                                } else {
                                    return null
                                }

                            })
                        }
                    </ScrollView>
                    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>
                        {
                            products.map((m, index) => {

                                if (index >= 20 && index < 30) {
                                    return <>
                                        <SlideProducts createdAt={m.createdAt} details={m.details} id={m.id} name={m.name}
                                                       stock={m.stock} image={CoffeeMachineImages[Math.floor(Math.random() * 5)]}/>
                                    </>
                                } else {
                                    return null
                                }

                            })
                        }
                    </ScrollView>

                </View>
            </ScrollView>
        </Container>
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

export default HomeScreen;