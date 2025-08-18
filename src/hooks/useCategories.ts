
import { useQuery } from "@tanstack/react-query";
import APIClient from "../components/sevices/api-client";
import ms from 'ms'
import type { Category } from "../entities/Category";


const apiCLient  = new APIClient<Category>('/genres')
const useCategories = () =>useQuery({
    queryKey: ['genres'],
    queryFn: apiCLient.getAll,
    staleTime: ms('24h') // 1 day
})

export default useCategories
