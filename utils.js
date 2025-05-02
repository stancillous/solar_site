import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000/solar-ireland/api",
    timeout: 30000,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});
    