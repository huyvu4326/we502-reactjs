import instance from "./instance";
import { IProduct } from "../interfaces/product";
export const getProducts = () => {
    return instance.get('/products');
}
export const getProductById = (id: number | string) => {
    return instance.get(`/products/${id}`);
  };
  
export const addProduct = (product: IProduct) => {
    return instance.post("/products", product, {
        headers:{
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`,
        },
       
    });
  };
export const updateProduct = (id: number | string, product: IProduct) => {
    return instance.put(`/products/${id}`, product, {
        headers:{
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
        }
    });
  };
export const deleteProducts = (id:number|string) => {
    return instance.delete(`/products/${id}`,{
        headers:{
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
        }
    })
}