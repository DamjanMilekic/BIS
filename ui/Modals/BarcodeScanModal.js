import React, {useRef, useState} from 'react';
import {Button, Modal, TextInput, ToastAndroid, View} from "react-native";
import styles from "../Styles";
import {addItemToList, addNewProduct} from "../../api/endpoints";
import Toast from "react-native-root-toast";
import DropDownPicker from 'react-native-dropdown-picker';


export default function BarcodeScanModal(props) {

    const [textInputName, setTextInputName] = React.useState(props.responseParam?.name);
    const [price, setPrice] = React.useState(0);
    const [quantity, setQuantity] = React.useState(0);
    const payload = {quantity: "", unit: "kg", updatedName: "", productId: props.responseParam?.id};
    const productPayload = {name: "", barcode: props?.barcodeParam, price: ""}
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'kg', value: 'kg'},
        {label: 'kom', value: 'piece'}
    ]);
    const showToast = () => {
        return (
            Toast.show('Product added successfully!', {
                duration: Toast.durations.SHORT,
            })
        )
    };
    const [hasProd, setHasProd] = useState(props.hasProduct);

    async function createNewProduct(productPayload) {
        try {
            productPayload.name = textInputName
            productPayload.price = price
            const createProduct = await addNewProduct(productPayload)
            console.log(createProduct.data.id)
         //   payload.productId= createProduct.data.id
            showToast()
            setHasProd(true)


        } catch (err) {
            console.log(err);
        }
    }
    async function createNewListItem(payload){
        try {
            payload.updatedName = textInputName
            payload.quantity = quantity
            payload.unit = value
            const response = await addItemToList(props.listid, payload)
            console.log(response)
            showToast()
            props.onPostCreate()

        } catch (e) {
            console.log(e)
        }
    }
    async function addNewItem() {
        if (props.barcodeParam) {
            createNewProduct(productPayload)
        } else {
            createNewListItem(payload)
        }
    }

    return (
        <View>
            {!hasProd ?
                (<Modal {...props} >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalInner}>
                            <TextInput label={"name"}
                                       placeholder={"Product name"}
                                       onChangeText={(text) => setTextInputName(text)}
                                       style={styles.textInput}/>
                            <TextInput label={"price"}
                                       placeholder={"Enter price here"}
                                       onChangeText={(text) => setPrice(text)}
                                       style={styles.textInput}/>
                            <Button title={"INSERT PRODUCT"} onPress={() => {
                                addNewItem()
                            }}></Button>
                            <Button style={styles.modalButton} title={"CANCEL"}
                                    onPress={props.closeModal}></Button>
                        </View>
                    </View>
                </Modal>) : (<Modal {...props} on>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalInner}>
                                <TextInput label={"name"}
                                           placeholder={"Product name"}
                                           defaultValue={props.responseParam?.name}
                                           Value={props.responseParam?.name}
                                           onChangeText={(text) => setTextInputName(text)}
                                           style={styles.textInput}/>
                                <DropDownPicker open={open} value={value}
                                    items={items} setOpen={setOpen}
                                    setValue={setValue} setItems={setItems}/>
                                <TextInput label={"quantity"}
                                           onChangeText={(text) => setQuantity(text)}
                                           style={styles.textInput}
                                           placeholder={"Enter quantity here"}/>
                                <Button title={"ADD"} onPress={() => {
                                    addNewItem()
                                }}></Button>
                                <Button style={styles.modalButton} title={"CANCEL"}
                                        onPress={props.closeModal}></Button>
                            </View>
                        </View>
                    </Modal>
                )}
        </View>

    )
}