import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://",
});

export { axiosInstance };