import { axiosInstance } from "../config/Axios"
import { IdProducts } from "../interfaces/Products";

export const getAttributes = async() => {
    try {
        const response = await axiosInstance.get("/api/v1/attributes");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getAttributesById = async(id?: number | string) => {
    try {
        const response = await axiosInstance.get(`api/v1/attributes/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const addAttributes = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.post(`api/v1/attributes`, product);
        console.log(product);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const deleteAttributes  = async(id?: number | string) => {
    try {
        const response = await axiosInstance.delete(`/api/v1/attributes/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const updateAttributes  = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.put(`/api/v1/attributes/${product._id}`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}