import {useEffect, useRef, useState} from "react";
import { CameraView, useCameraPermissions} from "expo-camera";
import {Button, View, Text} from "react-native";
import styles from "../ui/Styles"
import CreateNewListModal from "../ui/Modals/CreateNewListModal";
import BarcodeScanModal from "../ui/Modals/BarcodeScanModal";
import {getProductByBarcode} from "../api/endpoints";
export default function ExpoScan({}) {

    const [scaned, setScanned] = useState(false);
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);
    const [isModalVisible, setModalVisible] = useState(false);
    const [barcodeScan, setBarcodeScan] = useState(null);

    const toggleOpen = () => {
        setModalVisible(!isModalVisible);
    }

    useEffect(() => {
        requestPermission()
        return () => {
            if(cameraRef.current) {

                cameraRef.current.pausePreview()
                console.log('out')
            }
        }
    }, []);

   async function checkBarcode(barcode) {
        try {
            const response = await getProductByBarcode(barcode)
            setBarcodeScan(response)
            console.log(response)
        }catch(error) {
            console.log(error)
        }
    }

    const handleBarScanned = ({type, data}) => {
        console.log(data);
         //TODOset beep
        checkBarcode(data)

    }
    if (!permission || !permission.granted) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View>
            {scaned ? (<Button title={"Tap to Scan Again"} onPress={() => setScanned(false)}
            />,<BarcodeScanModal/> ): (
                <CameraView
                    ref={cameraRef}
                    facing={'back'}
                    style={styles.camera}
                    onBarcodeScanned={scaned ? undefined : handleBarScanned}
                    barcodeScannerSettings={{ barcodeTypes: ['ean13', 'qr', 'upc_a', 'upc_e'] }}/>)}

        </View>

    )

}