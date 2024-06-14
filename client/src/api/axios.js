
import axios from "axios";

const baseURL = process.env.BACKEND_API;
let instance = axios.create({
    baseURL: baseURL
})

const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
instance.defaults.headers.common['x-user-timezone'] = userTimeZone

export default instance