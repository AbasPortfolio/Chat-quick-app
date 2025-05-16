import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chat-application-a0h8.onrender.com",
  withCredentials: true,
});
