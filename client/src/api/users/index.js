
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


// PUT : Update User Data 
export const updateUser = async(username, data) =>{
    try{
        const response = await axios.put(`/api/users/${username}`, {...data})
        return (response.status == 200)? response.data : {}
    }catch(err){
        console.log(err);
        return {}
    }
}


// POST : Follow User
export const followUser = async(curUserId, followingId) =>{
    try{
        const response = await axios.post(`/api/users/follow/${curUserId}?id=${followingId}`)
        return (response.status == 200)? response?.data : {}
    }catch(err){
        return {}
    }
}

// POST : Follow User
export const unFollowUser = async(curUserId, followingId) =>{
    try{
        const response = await axios.post(`/api/users/unfollow/${curUserId}?id=${followingId}`)
        return (response.status == 200)? response?.data : {}
    }catch(err){
        return {}
    }
}