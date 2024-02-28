
import { useLocation } from "react-router-dom"
import Button from "../Button"
import { useSelector } from "react-redux"

export default function SideBar(){
    const location = useLocation().pathname;

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
            to : "/add",
            title : "Add Post",
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
        <div className="w-[200px] flex flex-col items-center m-5">
            {   
                data.map((e,i)=>{
                    return(
                        <div key={i}>
                            {
                                (e.isLogin) && <Button active={(location === e.to)} {...e}/> 
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}