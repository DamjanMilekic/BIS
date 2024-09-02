import React,{useState,useEffect } from 'react';
import { View, Text, FlatList} from 'react-native';
import {getProducts} from "../../api/endpoints";
import {ProductListItem} from "./ProductListItem";
import styles from "../Styles";

export default function Home () {

   // const[products,setProducts] = useState([]);
    const[productsResp,setProductsResp] = useState(null);


    useEffect(() => {
        const getData = async () =>{
            try{
                const response = await getProducts();
              //  setProducts(response.items);
                setProductsResp(response);

            } catch(err){
                //setProducts()

                console.log(err)
            }
        }
         getData()
        // getProducts().then(data => setProducts(data)) //another way
    }, []);

    if(!productsResp){
        return(<Text>Loading..</Text>)
    }

    return(
        <View style={styles.container}>
            {/*{products?.map((product, index) => (*/}
            {/*    <>*/}
            {/*        /!*<Text key={index}>{product.name}</Text>*!/* render product item}
            {/*        /!*<Text key={index}>{product.barcode}</Text>*!/*/}
            {/*    </>*/}
            {/*))}*/}
            <Text> {productsResp.total}</Text>
            <FlatList data={productsResp.items}
                      renderItem={({item}) => <ProductListItem product={item}/>} />


        </View>
    )




}



