import React, {useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SectionList, ScrollView, Image, TouchableOpacity, RefreshControl} from 'react-native';
import Container from "../Reusable/Container";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {IProducts} from "../interface/products.interface";
import axios from "axios";
import SlideProducts from "./content/content/SlideProducts";
import {StatusContext, TokenContext} from "../../../Context/Context";
import ViewClient from "./content/ViewClient";
import ViewRevendeur from "./content/ViewRevendeur";

const HomeScreen: React.FC = () => {

    const {token} = useContext(TokenContext);
    const {client, revendeur} = useContext(StatusContext)
    const [refreshing, setRefreshing] = useState<boolean>(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const {isLogin}= useContext(StatusContext)

   console.log(isLogin)
    return (
        <Container color={"white"}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                        }
            >
                <View style={{
                    padding: 10
                }}>

                    <Text style={styles.title}>Accueil</Text>
                    {
                        token ==="" ? <Text>No token</Text> :
                            <>
                                {
                                    client && (
                                        <>
                                        <ViewClient/>
                                        </>
                                    )
                                }

                                {
                                    revendeur &&(
                                        <View>
                                           <ViewRevendeur/>

                                        </View>
                                    )
                                }

                            </>
                    }


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