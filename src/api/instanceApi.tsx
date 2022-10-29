import axios from "axios";

const baseURL = 'https://api.thecatapi.com/v1/';

export const axiosInstance = axios.create({
  baseURL: baseURL,
});