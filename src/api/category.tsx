import instance from "./instance";
import { ICategory } from "../interfaces/category";
export const getCategories = () => {
    return instance.get('/categories');
}
export const getCategoryById = (id: number | string) => {
    return instance.get(`/categories/${id}`);
  };
  
export const addCategory = (category: ICategory) => {
    return instance.post("/categories", category, {
        headers:{
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
        }
    });
  };
export const updateCategory = (id: number | string, category: ICategory) => {
    return instance.put(`/categories/${id}`, category, {
        headers:{
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
        }
    });
  };
export const deleteCategories = (id:number|string) => {
    return instance.delete(`/categories/${id}`,{
        headers:{
            Authorization:`Bearer ${JSON.parse(localStorage.getItem('token')!)}`
        }
    })
}