

import apiClient from "../components/sevices/api-client";
import { useEffect, useState } from "react";
import { CanceledError } from "axios";

export interface Game{
  id: number;
  name: string;
  background_image:string;
  metacritic : number;
};
interface fetchGameResponse{
  count: number;
  results: Game[]
}

const useGames = () => {
  const [games, seGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(()=>{

           const controller = new AbortController();
           setLoading(true);
            apiClient.get<fetchGameResponse>('/games', {signal:controller.signal}).then(res =>
              { 
                seGames(res.data.results);
                 setLoading(false);})
            .catch(err=>{ 
              if (err instanceof CanceledError) return;
              
              setError(err.message);
              setLoading(false);
            });
              

            return () =>{
              controller.abort();
            };
            
        },[]);


  return {games, error, isLoading}
}

export default useGames
