import { api } from "./api";
import { successStatus, internalServerError } from "../utils/format-response";

export const getAllProducts = () =>
  api.get("/products").then(successStatus).catch(internalServerError);

export const signupWs = (data) =>
  api.post("/products", data).then(successStatus).catch(internalServerError);
