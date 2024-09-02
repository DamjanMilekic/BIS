import React, {useState} from 'react';
import styles from "../Styles";
import {Text} from "react-native";

export const ProductListItem = (props) => {

    const item = props.product;
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Text onPress={toggleOpen} style={styles.item}>{item.name}</Text>
            {isOpen && (
                <>
                    <Text style={styles.subitem}>{item.id}</Text>
                    <Text style={styles.subitem}>{item.barcode}</Text>
                    <Text style={styles.subitem}>{item.price}</Text>
                </>
            )
            }

        </>
    )
}