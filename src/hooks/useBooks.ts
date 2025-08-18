
import type { fetchResponse } from "../components/sevices/api-client";
import {  useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../components/sevices/api-client";
import ms from "ms";
import useBookQueryStore from "../store";
import type { Book } from "../entities/Book";


const apiClient = new APIClient<Book>('/games');

const useBooks = () =>
{
  const bookQuery = useBookQueryStore(s=>s.bookQuery)
  return useInfiniteQuery<fetchResponse<Book>, Error>({
    queryKey: ['games', bookQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: bookQuery.categoryId,
          ordering: bookQuery.sortOrder,
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
    
}

export default useBooks
