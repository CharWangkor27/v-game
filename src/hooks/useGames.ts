
import type { Category } from "./useCategories";
import useData from "./useData";

export interface Game{
  id: number;
  name: string;
  background_image:string;
  metacritic : number;
};

const useGames = (selectedCategory:Category|null) => useData<Game>('/games',{params:{genres:selectedCategory?.id}},[selectedCategory?.id])
export default useGames
