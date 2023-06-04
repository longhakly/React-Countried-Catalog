import axios from "axios";
const baseURL = "https://restcountries.com/v3.1";

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosInstance;
