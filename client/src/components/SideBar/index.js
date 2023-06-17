import { Link } from "react-router-dom"
import Button from "../Button"

export default function SideBar({toggle}){

    const data = [
        {
            to : "/",
            title : "Home"
        },
        {
            to : "/signup",
            title : "Sign Up"
        },
        {
            to : "/profile",
            title : "Profile"
        }
    ]

    return(
        <div className="w-[200px] flex flex-col items-center m-5">
            {   
                data.map((e,i)=>{
                    return(
                        <Button key={i}  onClick={toggle} active={(window.location.pathname==e.to)} to={e.to} title={e.title}/>
                    )
                })
            }
        </div>
    )
}