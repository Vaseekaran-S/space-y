
import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_API;
let instance = axios.create({
    baseURL: baseURL
})

export default instance