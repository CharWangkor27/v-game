
import type { BookQuery } from "@/App";
import useData from "./useData";

export interface Game{
  id: number;
  name: string;
  background_image:string;
  metacritic : number;
  rating_top: number;
};

const useGames = (bookQuery:BookQuery) => useData<Game>('/games',
  {params:{
    genres:bookQuery.category?.id,
    ordering:bookQuery.sortOder,
    search: bookQuery.searchText
  },
},[bookQuery],
  
)
export default useGames
