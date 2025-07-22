
import { useQuery } from "@tanstack/react-query";
import APIClient from "../components/sevices/api-client";


const apiCLient  = new APIClient<Category>('/genres')
export interface Category{
    id: number;
    name: string;
    image_background: string;
}
const useCategories = () =>useQuery({
    queryKey: ['genres'],
    queryFn: apiCLient.getAll,
    staleTime: 24 * 60 * 60 * 100 // 1 day
})

export default useCategories
