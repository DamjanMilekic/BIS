import React, {useEffect, useState} from 'react';
import {View, Text, Button, TextInput, FlatList} from 'react-native';
import styles from '../Styles'
import {addItemToList, getItems} from "../../api/endpoints";
import ListDetailsItem from "./ListDetailsItem";
import {useForm,SubmitHandler} from "react-hook-form";
import ExpoScan from "../../scanner/ExpoScan";

export default function ListDetails({route}) {

    const {id} = route.params;
    const [products, setProducts] = useState([]);
    const [newItem, setNewItem] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {setIsOpen(!isOpen)}

    useEffect(() => {
            getData()
        },   []);

    const getData = async () => {
        try {
            const response = await getItems(id);
            setProducts(response)

        } catch (error) {
            setProducts([])
            console.log(error)
        }
    }

    if(!products){
        return(<Text>Loading..</Text>)
    }
    console.log(newItem)
    return (
        <View style={styles.container}>
            {isOpen ? (
                <ExpoScan
                    refreshModal={getData()}
                          listid={id}/>
            ) : (<Button title={"ADD NEW ITEM"}  onPress={toggleOpen}></Button>)
            }
            <FlatList data={products}
                      renderItem={({item})=><ListDetailsItem listDetails={item}/>} />
        </View>
    )
}