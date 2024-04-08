import { axiosInstance } from "../config/Axios"
import { IdProducts } from "../interfaces/Products";

export const getAllProducts = async() => {
    try {
        const response = await axiosInstance.get("/api/products");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getProductById = async(id?: number | string) => {
    try {
        const response = await axiosInstance.get(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const addProduct = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.post(`/api/products`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const deleteProduct  = async(id?: number | string) => {
    try {
        const response = await axiosInstance.delete(`/api/products/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const updateProduct  = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.put(`/api/products/${product._id}`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}