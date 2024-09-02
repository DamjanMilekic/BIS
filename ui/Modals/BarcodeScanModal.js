import React from 'react';
import {Button, TextInput, View} from "react-native";
import styles from "../Styles";



export default function BarcodeScanModal(props) {

    const [newItem, setNewItem] = React.useState(null);

    function addNewItem(newItem) {

    }

    return(

        <View style={styles.modalScanInner}>

            <TextInput label={"Input:"} onChangeText={(value) => setNewItem((prev)=>({...prev,updatedProductName:value}))} style={styles.textInput}
                       placeholder={"Name of the product.."}/>
            <TextInput label={"Input:"} onChangeText={(value) => setNewItem((prev)=>({...prev,unit:value}))} style={styles.textInput}
                       placeholder={"Unit.."}/>
            <TextInput label={"Input:"} onChangeText={(value) => setNewItem((prev)=>({...prev,quantity:value}))} style={styles.textInput}
                       placeholder={"Quantity.."}/>
            <Button title={"ADD"} onPress={() => {toggleOpen(),addNewItem(newItem)}}></Button>
            <Button style={styles.modalButton} title={"Cancel"} onPress={props.onPressCancel}></Button>

        </View>


    )
}