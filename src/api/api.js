import axios from "axios";
import { CHARACTER_API } from "../constant/urlApi";

export const getCharacterApi = async () => {
  const response = await axios.get(CHARACTER_API);
  return response.data;
};

export const getCharacterIdApi = async (id) => {
  const response = await axios.get(`${CHARACTER_API}/${id}`);
  console.log("res", response);
  return response;
};
