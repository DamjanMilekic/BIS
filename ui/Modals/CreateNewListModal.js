import React, {useEffect, useState} from 'react';
import {Modal, View, Text, Button, TextInput} from "react-native";
import styles from "../Styles";
import {createNewList} from "../../api/endpoints";


export default function CreateNewListModal(props) {

    const [listName, setListName] = useState('');

    async function postList() {

        try {
            const payload = {name: listName}
            const response = await createNewList(payload)
            props.onPostCreate()
            console.log(response)
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <Modal {...props} on>
            <View style={styles.modalContainer}>
                <View style={styles.modalInner}>
                    <TextInput label={"Input:"} style={styles.textInput} onChangeText={(value) => setListName(value)}
                               placeholder={"Name of the list.."}/>
                    <Button style={styles.modalButton} title={"CREATE"} onPress={() => postList()}></Button>
                    <Button style={styles.modalButton} title={"Cancel"} onPress={props.onPressCancel}></Button>


                </View>
            </View>
        </Modal>
    )
}
// CreateNewListModal.defaultProps = {
//     transparent: true,
//     onRequestClose: () => {
//     },
// }

