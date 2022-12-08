import { useQuery } from "@tanstack/react-query";
import { getCharacterApi } from "../../../api/api";

export const useGetCharacter = () => {
  return useQuery({
    queryKey: ["character"],
    queryFn: () => getCharacterApi(),
  });
};
