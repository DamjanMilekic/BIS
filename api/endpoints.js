import {http} from './base'
//GET
export const getProducts = async () => {
    const{data} = await http.get(`/products`);
    return data;
}
export const getAllists = async () => {
    const{data} = await http.get('/lists')
    return data;
}
export const getItems = async (listId) => {
    const {data} = await http.get(`/lists/${listId}/items`);
    return data;
}
export const getProductByBarcode = async (barcode)=>{
    const {data} = await http.get(`products/barcode/${barcode}`);
    return data;
}
//////////////////////////////////////////////////////////////////////////////////////////////////
//POST
export const createNewList = async (payload)=>{
    const data = await http.post('/lists',payload)
    return data.status;
}
export const addItemToList = async (listId,payload)=>{
    const data = await http.post(`/lists/${listId}/items`,payload)
    return data.status;
}
export const addNewProduct = async (payload)=>{
    const data = await http.post(`/products`,payload)
    return data;
}