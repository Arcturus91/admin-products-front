import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

export const getAllProducts = () =>
  api.get("/products").then(successStatus).catch(internalServerError);

  export const getSingleProduct = (id) =>
  api.get(`/products/${id}`).then(successStatus).catch(internalServerError);


export const registerWs = (data) =>
  api.post("/products", data).then(successStatus).catch(internalServerError);

  export const updateWs = (data,id) =>
  api.patch(`/products/${id}`, data).then(successStatus).catch(internalServerError);

  export const deleteWs = (id) =>
  api.delete(`/products/${id}`).then(successStatus).catch(internalServerError);

  
