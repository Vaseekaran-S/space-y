import { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Layout({ children }) {

    const [position, setPosition] = useState('');

    if(typeof window !== "undefined"){
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 0){
                setPosition('top-[10vh]')
            }
        })
    }

    return (
        <div className="relative">
            <div className="sticky top-0">
                <NavBar />
            </div>
            <div className="flex z-50">
                <div className={`h-[90vh] bg-gray-500 sticky top-0 left-0 rounded ${position}`}>
                    <SideBar />
                </div>
                <div className="w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
