
import axios from "../axios"

export const getPosts = async() =>{
    try{
        const data = await axios.get("/getPost")
        return await data.data
    }catch(err){
        console.log("Error at Get Post");
        return []
    }
}