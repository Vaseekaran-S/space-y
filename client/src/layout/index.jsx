import { useState } from "react";
import { useSelector } from "react-redux"

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Overlay from "../components/Overlay";
import SideProfileBar from "../components/SideProfile";

export default function Layout({ children }) {

    const auth = useSelector( store => store.profile.isAuthenticated )

    const [position, setPosition] = useState('');
    if(typeof window !== "undefined"){
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 0){
                setPosition('top-[10vh]')
            }
        })
    }

    const [sideBarState, setSideBarState] = useState(false);
    const sideBarToggle = () => {
        setSideBarState(!sideBarState)
    }

    return (
        <div className="relative">
            <div className="sticky top-0 z-50">
                <NavBar sideBarToggle={sideBarToggle} sideBarState={sideBarState}/>
            </div>
            <div className="flex">
                <div className={`h-[90vh] bg-gray-500 rounded ${sideBarState ?'block fixed':'hidden sticky'} left-0 top-0 ${position} lg:block z-50`}>
                    <SideBar setSideBarState={setSideBarState}/>
                    <Overlay style="z-10 lg:hidden"/>
                </div>
                <div className="w-full min-h-[90vh]">
                    {children}
                </div>
                <div className={`h-[90vh] hidden sticky left-0 top-0 ${position} ${auth && 'lg:block'}`}>
                    { auth && <SideProfileBar /> }
                </div>  
            </div>
        </div>
    );
}
