import instance from "./instance";
import { ICategory } from "../interfaces/category";
export const getCategories = () => {
  return instance.get("/categories");
};
export const getCategoryById = (_id: number | string) => {
  return instance.get(`/categories/${_id}`);
};

export const addCategory = (category: ICategory) => {
  return instance.post("/categories", category, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
    },
  });
};
export const updateCategory = (_id: number | string, category: ICategory) => {
  return instance.put(`/categories/${_id}`, category, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
    },
  });
};
export const deleteCategories = (_id: number | string) => {
  return instance.delete(`/categories/${_id}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("token")!)}`,
    },
  });
};
