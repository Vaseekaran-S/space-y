
import axios from "../axios"

export const createNewUser = async(data) => {
    console.log("API : ",data);
    try{
        const responce = await axios.post("/signup", {
            email: data?.email,
            name: data?.name,
            username: data?.username,
            password: data?.password,
        })
        console.log("Responce : ",responce);
        return responce.data
    }catch(err){
        console.log("Error : ",err);
    }
}

export const verifyUser = async(data) => {
    console.log("Verify API : ",data);
    try{
        const responce = await axios.post("/login",{
            username: data?.username,
            password: data?.password
        })
        console.log("Responce : ",responce);
        return responce.data
    }catch(err){
        console.log(err);
    }
}


export const checkUser = async() => {
    try{
        const token = localStorage.getItem("spaceY-token")
        const response = await axios.get("/checkUser", {
            headers: {
                Authorization: token
            }
        })
        console.log("User Auth : ", response);
        if(response?.data?.status == 202){
            return response?.data
        }else{
            return false
        }
    }catch(error){
        console.log(error);
        return false
    }
}


export const getUser = async(username) => {
    try{
        const response = await axios.get(`/users/${username}`)
        console.log(response);
        return response.data
    }catch(err){
        console.log(err);
    }
}