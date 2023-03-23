import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/products');
}
const getOneProduct = () => {
    return instance.get('/products/' + id);
}
const addProduct = (product) => {
    return instance.post('/products', product);
}
const updateProduct = (product) => {
    return instance.put('/products/' + product.id, product);
}
const deleteProduct = (id) => {
    return instance.delete('/products/' + id);
}

export { getAllProduct, getOneProduct, addProduct, updateProduct, deleteProduct }