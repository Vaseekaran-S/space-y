
import { signOut } from "firebase/auth"
import Button from "../Button"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function SideBar(){
    const navigate = useNavigate()
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

    function logout(){
        signOut(auth).then(()=>{
            navigate('/signup')
        })
    }

    return(
        <div className="w-[200px] flex flex-col items-center m-5">
            {   
                data.map((e,i)=>{
                    return(
                        <div key={i}>
                            {
                                (e.isLogin) && <Button active={(window.location.pathname === e.to)} {...e}/>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}