import { axiosInstance } from "../config/Axios"
import { IdProducts } from "../interfaces/Products";

export const getAttributesValues = async() => {
    try {
        const response = await axiosInstance.get("/api/v1/attributesvalues");
        return response.data;
    } catch (error) {
        console.log(error); 
    }
}
export const getAttributesValuesById = async(id?: number | string) => {
    try {
        const response = await axiosInstance.get(`api/v1/attributesvalues/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const addAttributesValues = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.post(`api/v1/attributes/${product._id}/values`, product);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const deleteAttributesValues  = async(id?: number | string) => {
    try {
        const response = await axiosInstance.delete(`/api/v1/attributesvalues/${id}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
export const updateAttributesValues  = async(product: IdProducts) => {
    try {
        const response = await axiosInstance.put(`/api/v1/attributesvalues/${product._id}`, product);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}