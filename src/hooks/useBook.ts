import APIClient from "../components/sevices/api-client"
import { useQuery } from "@tanstack/react-query"
import type { Book } from "../entities/Book"


const apiClient = new APIClient<Book>('/games')
const useBook = (slug:string) => useQuery ({
    queryKey:['games',slug],
    queryFn:()=>apiClient.get(slug)
})
export default useBook
