import axios from "axios";



const Url = "http://localhost:8081";

const api = `${Url}/api`;

const axiosInstance = axios.create({
baseURL: api,

});





export default axiosInstance