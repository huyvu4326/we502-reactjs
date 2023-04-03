import instance from "./instance";
interface IProduct{
    id: number,
    name: string,
    price: number
};

const getAllProduct = () => {
    return instance.get('/products');
}
const getProduct = (id:number) => {
    return instance.get('/products/' + id);
}
const addProduct = (product:IProduct) => {
    return instance.post('/products', product);
}
const updateProduct = (product:IProduct) => {
    return instance.put('/products/' + product.id, product);
}
const deleteProduct = (id: number) => {
    return instance.delete('/products/' + id);
}

export { getAllProduct, getProduct, addProduct, updateProduct, deleteProduct }