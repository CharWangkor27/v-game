import axios, { type AxiosRequestConfig } from "axios";

export  interface fetchResponse<T>{
    count: number;
    results: T[];
    next: string|null;
}
const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '189420e7291b45a7a943278b1272e80d'
    }
})


class APIClient<T>{
    end_point : string;
    constructor(end_point: string){
        this.end_point = end_point
    }
    getAll = (config:AxiosRequestConfig)=>{
        return axiosInstance
        .get<fetchResponse<T>>(this.end_point,config)
        .then(res=>res.data);
    }
}
export default APIClient;