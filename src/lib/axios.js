import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://backend-j6o1.onrender.com/api",
  withCredentials: true,
});
