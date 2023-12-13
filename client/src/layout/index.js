import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { auth } from "../config/config";

export default function Layout({children}){

    const [sideBar, setSideBar] = useState(false)

    function toggle(){
        setSideBar(!sideBar)
    }

    return(
        <div>
            <div className='sticky top-0 z-10'>
                <NavBar toggle={toggle} state={sideBar}/>
            </div>
            <div className="flex">
                <div className="h-[90vh] bg-gray-500 fixed md:static top-[60px] left-0">
                    {sideBar?<SideBar auth={auth?.currentUser?.email} toggle={toggle} />:""}
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}