import axiosInstance from "./axiosConfig";

export const getSearchCountriesAPI = async (searchInput : String) => {
    try {
        const response = await axiosInstance.get(`/name/`+ searchInput +`?fields=name,cca2,cca3,idd,altSpellings,flags`);
        return response;
    } catch (error) {
        return null;
    }
};
