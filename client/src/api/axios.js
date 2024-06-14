
import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_API || "http://localhost:3001";
let instance = axios.create({
    baseURL: baseURL
})

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
instance.defaults.headers.common['x-user-timezone'] = userTimeZone

export default instance