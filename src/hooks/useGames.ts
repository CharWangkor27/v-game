
import useData from "./useData";

export interface Game{
  id: number;
  name: string;
  background_image:string;
  metacritic : number;
};

const useGames = () => useData<Game>('/games')
export default useGames
