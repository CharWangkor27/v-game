import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '189420e7291b45a7a943278b1272e80d'
    }
})