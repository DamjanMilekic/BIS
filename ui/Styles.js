import {StyleSheet} from "react-native";
import text from "react-native-web/src/exports/Text";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalScanContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalScanInner: {
        backgroundColor: "azure",
        width: 300,
        height: 180,
        borderWidth: 1,
        borderColor: "lightsteelblue",
        borderRadius: 2,
        alignItems: "center",
    },
    modalInner: {
        backgroundColor: "azure",
        width: 300,
        height: 180,
        padding: 20,
        borderWidth: 1,
        borderColor: "lightsteelblue",
        borderRadius: 2,
        alignItems: "center",
    },

    modalText: {
        fontSize: 16,
        margin: 5,
        color: "slategrey",
    },

    modalButton: {
        fontWeight: "bold",
        margin: 5,
        color: "slategrey",
    },
    buttonCreate: {
        backgroundColor: 'purple',
        color: 'white',
        padding: 10,
        textAlign: "center"
    },
    textInputContainer: {
        alignSelf: "stretch",
        marginBottom: 30,
    },

    textInputLabel: {
        marginBottom: 4,
    },

    textInput: {
        backgroundColor: "gray",
        color:"black",
        height: 30,
        width: 300,
        fontSize: 11,
    },
    camera: {
        height: 300,
        width: 300,

    },
    productList: {
        paddingBottom: 10,
    },
    mapView: {
        alignSelf: "stretch",
        height: 450,
        margin: 30,
    },
    stoutText: {
        color: "firebrick",
    },

    boldText: {
        fontWeight: "bold",
    },
    address: {
        fontWeight: "bold",
    },
    item: {
        margin: 5,
        padding: 5,
        color: "red",
        backgroundColor: "#f7c2be",
        textAlign: "center",
    },
    subitem: {
        margin: 3,
        padding: 3,
        color: "black",
        backgroundColor: "gray",
        textAlign: "center",
    },
    pickersBlock: {
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    pickerHeight: {
        height: 250,
    },

    pickerContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        padding: 6,
        height: 240,
    },

    pickerLabel: {
        fontSize: 14,
        fontWeight: "bold",
    },

    picker: {
        width: 150,
        backgroundColor: "white",
    },

    selection: {
        flex: 1,
        textAlign: "center",
    },
});