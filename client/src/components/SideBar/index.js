
import { signOut } from "firebase/auth"
import Button from "../Button"
import { useNavigate } from "react-router-dom"

export default function SideBar({auth,toggle}){

    const navigate = useNavigate()

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
                        <>
                            {(e.isLogin)?
                                <Button key={i} onClick={toggle} active={(window.location.pathname==e.to)} to={e.to} title={e.title}/>:""
                            }
                        </>
                    )
                })
            }
        </div>
    )
}