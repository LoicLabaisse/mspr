import React, {useContext, useEffect, useState} from 'react';
import {View, Text, TouchableOpacity,StyleSheet} from "react-native";
import axios from "axios";
import {TokenContext} from "../../../../Context/Context";

// @ts-ignore
import {REACT_APP_API_REVENDEUR} from "@env"
import moment from "moment";
import 'moment/locale/fr'
import {Order} from "../../interface/user.interface";
import Icon from "react-native-vector-icons/Ionicons";


const ViewRevendeur: React.FC = () => {

    const [client, setClient] = useState<string>("")
    const {token} = useContext(TokenContext);
    const [dataClient, setDataClient] = useState<Array<Order>>([])
    const [show,setShow]= useState<number| null>()



    const handleShowDetails=(index: number | undefined)=> {
        if (show === index) {
            setShow(null);
        } else {
            setShow(index);
        }
    }

    useEffect(() => {

        axios.post(`${REACT_APP_API_REVENDEUR}user/orders/find`, {}, {
            headers: {
                'Authorization': token
            }
        }).then(r => setDataClient(r.data.Data[0])).catch(e => console.log(e))

    }, [])
    return (
        <View>
            {
                dataClient.map((m,index) => (
                    <View key={index}>

                        <TouchableOpacity onPress={()=>handleShowDetails(index)}>
                      <View style={styles.boxProducts}>
                          <View style={{display:"flex", flexDirection:"row",width:"100%",justifyContent:"space-between"}} >
                          <Text style={styles.boxProducts_Text}>Nom : {m.product.name}</Text>
                          {/*{*/}
                          {/*    show ===index ? <Icon size={20} color={"#fff"}  name={"chevron-down-outline"}/>:<Icon color={"#fff"} size={20} name={"chevron-forward-outline"}/>*/}
                          {/*}*/}
                          </View>

                          <Text style={{color:"white"}}>Commande du client : <Text style={{fontWeight:"bold",color:"white"}}>{m.id}</Text></Text>
                          <Text  style={{color:"white"}}>Commande passé le <Text style={{fontWeight:"bold",color:"white"}}>{moment(m.createdAt).format('LL')}</Text> </Text>
                      </View>

                        </TouchableOpacity>

                        {
                            show ===index &&(
                                <View style={styles.boxProducts_content}>
                                    <Text style={{fontSize:20,color:"white"}}>Détails du produit :</Text>
                                    <Text style={styles.boxProducts_content_text}><Text style={{fontWeight:"bold",color:"white"}}>Stock :</Text> {m.product.stock}</Text>
                                    <Text style={styles.boxProducts_content_text}><Text style={{fontWeight:"bold",color:"white"}}>Prix :</Text>  {m.product.details.price}€</Text>
                                    <Text style={styles.boxProducts_content_text}><Text style={{fontWeight:"bold",color:"white"}}>Description :</Text>  {m.product.details.description}</Text>
                                    <Text style={styles.boxProducts_content_text}><Text style={{fontWeight:"bold",color:"white"}}>Couleur:</Text>  {m.product.details.color}</Text>
                                </View>

                            )
                        }
                    </View>

                ))
            }
        </View>
    );
};


const styles = StyleSheet.create({

    boxProducts:{
        borderRadius:10,
        marginVertical:5,
        padding:10,
        backgroundColor:"#BEAA6F",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
    },
    boxProducts_Text:{
        fontSize:20,
        color:"white"
    },
    boxProducts_content:{
        marginVertical:5,
        padding:10,
        backgroundColor:"#BEAA6F",
        borderRadius:10,
        height:200,
        display:"flex",
        justifyContent:"space-between"

    },
    boxProducts_content_text:{
        color:"white"
    }

})

export default ViewRevendeur;