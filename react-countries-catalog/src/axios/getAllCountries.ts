import axiosInstance from "./axiosConfig";

export const getAllCountriesAPI = async () => {
    try {
        const response = await axiosInstance.get("/all?fields=name,cca2,cca3,idd,altSpellings,flags");
        return response;
    } catch (error) {
        return null;
    }
};
