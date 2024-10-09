import {useEffect, useRef, useState} from "react";
import {CameraView, useCameraPermissions} from "expo-camera";
import {Button, View, Text} from "react-native";
import styles from "../ui/Styles"
import BarcodeScanModal from "../ui/Modals/BarcodeScanModal";
import {getProductByBarcode} from "../api/endpoints";

export default function ExpoScan(props) {

    const [scaned, setScanned] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [barcodeScanParam, setBarcodeScanParam] = useState(null);
    const [hasProduct, setHasProduct] = useState(false);
    const [barcode, setBarcode] = useState(null);
    const closeModal = () => {
        props.refreshModal
        setModalVisible(false);
    }
    useEffect(() => {
        requestPermission()
        // return () => {
        //     if(cameraRef.current) {
        //         cameraRef.current.pausePreview()
        //         console.log('out')
        //     }
        // }
    }, []);

    async function checkBarcode(barcode) {
        try {
            const response = await getProductByBarcode(barcode)
            setBarcodeScanParam(response)
            setScanned(true)
            setModalVisible(true)
            setHasProduct(true)
        } catch (error) {
            if (error.response.status === 404) {
                console.log(error)
                setScanned(true)
                setModalVisible(true)
                setBarcode(barcode)
                setHasProduct(false)
            }
        }
    }

    const handleBarScanned = ({data}) => {
        //TODOset beep
        checkBarcode(data)
    }
    if (!permission || !permission.granted) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View>
            <Button title={"Tap to Scan Again"}   onPress={() => setScanned(false)}/>
            {scaned ?
                (<BarcodeScanModal
                        listid={props.listid}
                        responseParam={barcodeScanParam}
                        barcodeParam={barcode}
                        onPostCreate={closeModal}
                        visible={modalVisible}
                        hasProduct={hasProduct}
                        closeModal={closeModal}/>):(<CameraView
                    ref={cameraRef}
                    facing={'back'}
                    style={styles.camera}
                    onBarcodeScanned={scaned ? undefined : handleBarScanned}
                    barcodeScannerSettings={{barcodeTypes: ['ean13', 'qr', 'upc_a', 'upc_e']}}/>)}
        </View>
    )
}
