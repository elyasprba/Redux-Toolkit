import axios from "axios";
import { CHARACTER_API } from "../constant/urlApi";

export const getCharacterApi = async (name) => {
  const response = await axios.get(CHARACTER_API, {
    params: {
      name: name,
    },
  });
  return response.data;
};

export const getCharacterIdApi = async (id) => {
  const response = await axios.get(`${CHARACTER_API}/${id}`);
  return response.data;
};
