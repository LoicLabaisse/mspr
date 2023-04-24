import React from 'react';
import {View, Text, StyleSheet, SectionList, ScrollView, Image, TouchableOpacity} from 'react-native';
import Container from "../Reusable/Container";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

const HomeScreen: React.FC = () => {

    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    const DATA = [
        {
            title: 'Machine 1',
            price: "19.99",
            dimension:"540 / 650 x 265",
            url: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg"
        },
        {
            title: 'Machine 2',
            price: "39.99",
            dimension:"520 / 340 x 265",
            url: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg"
        },
        {
            title: 'Machine 3',
            price: "30.99",
            dimension:"450 / 090 x 265",
            url: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg"
        },
        {
            title: 'Machine 4',
            price: "29.99",
            dimension:"090 / 780 x 265",
            url: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg"
        },
        {
            title: 'Machine 5',
            price: "59.99",
            dimension:"540 / 650 x 265",
            url: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg"
        },
    ];
    return (
        <Container color={"white"}>
            <View style={{
                padding: 10
            }}>

                <Text style={styles.title}>Accueil</Text>
                <Text style={styles.item_title}>Products</Text>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>


                    {
                        DATA.map((m, index) => (
                            <>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("ProductsDetails", {property: m})}>
                                    <View key={index}>

                                        <View>
                                            <View style={styles.item}></View>
                                            <Text>{m.title}</Text>
                                            <Text>{m.price}€</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </>
                        ))
                    }
                </ScrollView>
                <Text style={styles.item_title}>Products</Text>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal={true}>


                    {
                        DATA.map((m, index) => (
                            <View key={index}>

                                <View>
                                    <View style={styles.item}></View>
                                    <Text>{m.title}</Text>
                                    <Text>{m.price}€</Text>
                                </View>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
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
        marginRight: 10
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
});

export default HomeScreen;