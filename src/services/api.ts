import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://api-sburguer.onrender.com",
});
