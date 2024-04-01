
import { useLocation } from "react-router-dom"
import Button from "../Button"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react";

export default function SideBar({setSideBarState}){
    const location = useLocation().pathname;
    const [currentBtn, setCurrentBtn] = useState(location);

    useEffect(()=>{
        setSideBarState(false)
        setCurrentBtn(location)
    },[location])

    const auth = useSelector( store => store.profile.isAuthenticated )

    const data = [
        {
            to : "/",
            title : "Home",
            isLogin: true
        },
        {
            to : "/profile",
            title : "Profile",
            isLogin: auth
        },
        {
            to : "/signup",
            title : "Sign Up",
            isLogin: !auth
        },
        {
            to : "/login",
            title : "Login",
            isLogin: !auth
        },
        {
            title : "Sign Out",
            isLogin: auth,
            onClick: ()=>{
                localStorage.removeItem("spaceY-token")
                window.location.reload("/")
            }
        }
    ]

    return(
        <div className="w-[200px] relative flex flex-col items-center m-5 z-20">
            {   
                data.map((e,i)=>{
                    return(
                        <div key={i}>
                            {
                                (e.isLogin) && <Button active={(currentBtn === e.to)} {...e}/> 
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}