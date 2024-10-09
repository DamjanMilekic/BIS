import React, {useEffect, useState} from "react";
import {View, FlatList, Button} from "react-native";
import styles from "../Styles";
import {getAllists} from "../../api/endpoints";
import AllListItem from "./AllListItem";
import CreateNewListModal from "../Modals/CreateNewListModal";


export default function AllList() {

    const [modalVisible, setModalVisible] = useState(false);
    const [lists, setList] = useState([]);

    function toggleModal() {
        setModalVisible(!modalVisible);
    }

    function onCreate() {
        setModalVisible(false);
        getData()
    }

    const getData = async () => {
        try {
            const response = await getAllists()
            setList(response)
            //  console.log(response)
        } catch (error) {
            setList([])
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <View style={styles.container}>
            <CreateNewListModal
                animationType="fade"
                onDismiss={() => getAllists()}
                visible={modalVisible}
                onPressCancel={toggleModal}
                onPostCreate={onCreate}
            />
            <Button style={styles.buttonCreate} onPress={toggleModal} title={"ADD NEW LIST"}></Button>
            <FlatList data={lists}
                      renderItem={(flatListItem) =>
                          <AllListItem list={flatListItem.item}/>
                      }/>
        </View>
    );
}
