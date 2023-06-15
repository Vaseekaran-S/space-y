
import { useState } from "react"
import Avatar from "react-avatar"

export default function PostCard({ profile, name, image, date, desc }) {

    const [descOverFlow, setDescOverFlow] = useState(false)

    return (
        <div className="w-full h-auto bg-gray-200 md:col-span-1 rounded">
            <div className="w-full h-[60px] flex items-center px-3">
                <Avatar color={profile} name={name} size="40" round={true}/>
                <h4 className="font-medium text-lg ml-3">{name}</h4>
            </div>
            <div className="h-[300px]">
                <img src={image} alt="img" className="w-full h-full bg-lime-500" />
            </div>
            <div className={(descOverFlow?"h-auto":"" )+" px-5"}>
                <p className={(descOverFlow?"":`truncate w-[300px]`)+" font-medium py-3 text-justify"} onClick={()=>{setDescOverFlow(!descOverFlow)}}>{desc}</p>
            </div>
            <div className="h-[25px] flex items-center ml-5 mb-2 font-thin">
                <p>{date}</p>
            </div>
        </div>
    )
}