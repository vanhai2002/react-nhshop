import { axiosInstance } from "../config/Axios"
import { IdProducts } from "../interfaces/Products";

export const getSize = async() => {
    try {
        const response = await axiosInstance.get("/api/v1/size");
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const getSizeById = async(id?: number | string) => {
    try {
        const response = await axiosInstance.get(`/api/v1/size/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const addSize = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.post(`/api/v1/size`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const deleteSize = async(id?: number | string) => {
    try {
        const response = await axiosInstance.delete(`/api/v1/size/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const updateSize  = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.put(`/api/v1/size/${product._id}`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}