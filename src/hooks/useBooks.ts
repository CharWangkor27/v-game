
import type { BookQuery } from "@/App";
import type { fetchResponse } from "../components/sevices/api-client";
import {  useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../components/sevices/api-client";
import ms from "ms";

export interface Book{
  id: number;
  name: string;
  background_image:string;
  metacritic : number;
  rating_top: number;
};

const apiClient = new APIClient<Book>('/games');

const useBooks = (bookQuery: BookQuery) =>
  useInfiniteQuery<fetchResponse<Book>, Error>({
    queryKey: ['games', bookQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: bookQuery.categoryId,
          ordering: bookQuery.sortOder,
          search: bookQuery.searchText,
          page: pageParam, 
        },
      }),
      staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
     
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1, 
  });
    

export default useBooks
