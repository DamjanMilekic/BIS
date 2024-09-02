import React, {useEffect} from 'react';
import styles from '../Styles'
import {Text} from "react-native";

 export default function ListDetailsItem(props) {

    const item = props.listDetails;
    return (
        <>
      {/*<Text style={styles.item}>ID: {item.id}I</Text>*/}
            <Text style={styles.item}>{item.updatedProductName}</Text>
            <Text style={styles.item}>{item.unit}</Text>
            <Text style={styles.item}>{item.quantity}</Text>
            <Text style={styles.item}>{item.createdAt}</Text>
        </>

    )
}


