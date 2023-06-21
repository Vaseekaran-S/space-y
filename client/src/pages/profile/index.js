import Avatar from "react-avatar";
import EditInput from "../../components/EditInput";
import Button from "../../components/Button";
import { auth } from "../../config/config"

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile(){
    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState('')
    const [user, setUser] = useState('')
    const [isLoad, setIsLoad] = useState(false)

    onAuthStateChanged(auth, (e)=>{
        setCurrentUser(e)
    })

    function getUserData(){
        axios.get(`http://localhost:3001/getUser?mail=${currentUser?.email}`).then((e)=>{
            setUser(e.data[0])
        })
    }

    function logout(){
        signOut(auth).then(()=>{
            navigate('/signup')
        })
    }

    useEffect(()=>{
        getUserData()
    },[currentUser])

    return(
        <div className="h-[90vh] w-[100vw] flex flex-col items-center justify-center">
            <div className={"loading-spinner "+(isLoad?"loading-spinner-active":"")}></div>
            <h2 className="mb-4 font-bold text-xl font-mono">PROFILE</h2>
            <div className="p-12 bg-gray-300 flex flex-col items-center justify-center">
                {(currentUser?.email)?
                    <Avatar size='40' round={true} name={currentUser?.email} className="mb-3"/>
                    :
                    <Avatar facebookId="100008343750912" size="50" round={true} className="border"/>
                }
                <div>
                    <h3 className="font-medium">Name: </h3>
                    <EditInput type="text" value={user?.name} />
                </div>
                <div>
                    <h3 className="font-medium">Number: </h3>
                    <EditInput type="text" value={user?.number} />
                </div>
                <div>
                    <h3 className="font-medium">Mail ID: </h3>
                    <EditInput type="text" value={auth.currentUser?.email}/>
                </div>                
                <Button title="Logout" to="" active={true} onClick={logout}/>
            </div>
        </div>
    )
}