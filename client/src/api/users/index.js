
import axios from "../axios"


// GET : Get User Data from Db with username

export const getUser = async(username) => {
    try{
        const response = await axios.get(`/api/users/${username}`)
        return (response.status == 202)? response.data : {}
    }catch(err){
        console.log(err);
        return {}
    }
}