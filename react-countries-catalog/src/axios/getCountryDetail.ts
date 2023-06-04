import axiosInstance from "./axiosConfig";

export const getCountryDetailAPI = async (searchInput : String) => {
    try {
        const response = await axiosInstance.get(`/name/`+ searchInput);
        return response;
    } catch (error) {
        return null;
    }
};
