
import axios from "../axios"

// Create user at singup request
export const signUp = async(data) => {
    try{
        const responce = await axios.post("/api/auth/signup", {
            email: data?.email,
            name: data?.name,
            username: data?.username,
            password: data?.password,
        })
        return responce.data
    }catch(err){
        return { status: 400}
    }
}

// Verify user data at login request
export const logIn = async(data) => {
    try{
        const responce = await axios.post("/api/auth/login",{
            username: data?.username,
            password: data?.password
        })
        return responce.data
    }catch(err){
        return { status: 400}
    }
}


// Vadilate user token
export const verifyToken = async() => {
    try{
        const token = localStorage.getItem("spaceY-token")
        if(!token){
            return false
        }
        const response = await axios.get("/api/auth/token", {
            headers: {
                Authorization: token
            }
        })
        const status = (response?.data?.status == 202)? response?.data : false
        return status
    }catch(error){
        return false
    }
}