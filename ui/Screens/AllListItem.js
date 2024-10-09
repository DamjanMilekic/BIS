import React, {useEffect} from 'react';
import styles from '../Styles'
import {Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function AllListItem(props) {

    const navigation = useNavigation();
    const item = props.list;
    return (
        <>
            <TouchableOpacity
                onPress={()=> navigation.navigate('ListDetails',
                    { id: item.id,
                    name: item.name})}>
                <Text style={styles.item}>ID:{item.id}I</Text>
                <Text style={styles.item} >{item.name}</Text>
                <Text style={styles.item}>{item.createdAt}</Text>
            </TouchableOpacity>

        </>

    )
}


