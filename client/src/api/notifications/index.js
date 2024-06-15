import axios from "../axios"

// GET : Get User Notification from Db with username
export const getNotifications = async(userId) => {
    try{
        const response = await axios.get(`/api/notification/${userId}`)
        return (response.status == 202)? response.data : {}
    }catch(err){
        console.log(err);
        return {}
    }
}