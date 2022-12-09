import { useQuery } from "@tanstack/react-query";
import { getCharacterIdApi } from "../../../api/api";

export const useGetCharacterId = (id) => {
  return useQuery({
    queryKey: ["characterid"],
    queryFn: () => getCharacterIdApi(id),
  });
};
