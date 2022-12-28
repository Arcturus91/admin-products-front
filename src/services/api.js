import axios from "axios";
const baseURL = "http://localhost:5005/";

export const api = axios.create({
  baseURL,
  timeout: 10000,
});
