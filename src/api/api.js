import axios from "axios";
import { CHARACTER_API } from "../constant/urlApi";

export const getCharacterApi = async () => {
  const response = await axios.get(CHARACTER_API);
  return response.data;
};
