import { useSelector } from "react-redux"
import ProfileAvatar from "../Avatar";
import { useEffect, useState } from "react";

const { getNotifications } = require("../../api/notifications")

export default function SideProfileBar() {
    const currentUser = useSelector( store => store.profile.userData)
    const [notifications, setNotifications] = useState([])
    console.log(currentUser?._id);

    useEffect(()=>{
        const fetchData = async() => {
            const data = await getNotifications(currentUser?._id)
            setNotifications(data)
            console.log("Data ",data);
        }
        fetchData()
    },[currentUser])

    return (
        <div className="w-[300px] my-3 mx-2 z-20">
            <div className="relative flex flex-col items-center p-2 py-5 shadow-lg border rounded">
                <div className="w-[100px] h-[100px] rounded-full border p-1">
                    <ProfileAvatar />
                </div>
                <h2 className="text-lg font-bold mt-1">{ currentUser?.name }</h2>
                <p>{ currentUser.username }</p>
            </div>
            <div className="relative flex flex-col items-center p-2 py-5 mt-4 shadow-lg border rounded">
                { notifications?.length > 0 
                ?
                    
                    notifications?.map(notification=>[
                        <p>{notification?.message}</p>
                    ])
                    
                    :
                    <p>No activity found</p>
                 }
            </div>
        </div>
    )
}