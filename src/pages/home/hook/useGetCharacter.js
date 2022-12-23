import { useQuery } from "@tanstack/react-query";
import { getCharacterApi } from "../../../api/api";

export const useGetCharacter = (name) => {
  return useQuery({
    queryKey: ["character", name],
    queryFn: () => getCharacterApi(name),
    retry: false,
  });
};
