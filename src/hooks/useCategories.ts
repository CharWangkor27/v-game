
import { useQuery } from "@tanstack/react-query";
import APIClient from "../components/sevices/api-client";
import ms from 'ms'


const apiCLient  = new APIClient<Category>('/genres')
export interface Category{
    id: number;
    name: string;
    image_background: string;
}
const useCategories = () =>useQuery({
    queryKey: ['genres'],
    queryFn: apiCLient.getAll,
    staleTime: ms('24h') // 1 day
})

export default useCategories
