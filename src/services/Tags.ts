import { axiosInstance } from "../config/Axios"
import { IdProducts } from "../interfaces/Products";

export const getTags = async() => {
    try {
        const response = await axiosInstance.get("/api/v1/tags");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getTagsById = async(id?: number | string) => {
    try {
        const response = await axiosInstance.get(`/api/v1/tags/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const addTags = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.post(`/api/v1/tags`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const deleteTags  = async(id?: number | string) => {
    try {
        const response = await axiosInstance.delete(`/api/v1/tags/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const updateTags = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.put(`/api/v1/tags/${product._id}`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}