
import { useState } from "react"
import Avatar from "react-avatar"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import {likedPost} from '../../redux/reducers/reducer'
import axios from "axios"

export default function PostCard({ profile, name, image, date, desc }) {

    const navigate = useNavigate()
    
    const dispatch = useDispatch()
    const [descOverFlow, setDescOverFlow] = useState(false)
    const [liked, setLiked] = useState(false)

    function isLiked(id){
        setLiked(!liked)
        dispatch(likedPost())
    }

    return (
        <div className="w-full h-auto bg-gray-200 md:col-span-1 rounded">
            <div className="w-full h-[60px] flex items-center px-3">
                {(name)?
                    <Avatar size='40' round={true} name={name} onClick={()=>navigate(`/${name}`)} className='cursor-pointer'/>
                    :
                    <Avatar facebookId="100008343750912" size="40" onClick={()=>navigate('/signup')} className='cursor-pointer' round={true}/>
                }
                <h4 className="font-medium text-lg ml-3 truncate">{name}</h4>
            </div>
            <div className="h-[300px]">
                <img src={image} alt="img" className="w-full h-full bg-lime-500" loading="lazy"/>
            </div>
            <div>
                <div className={`heart cursor-pointer `+(liked?'liked-heart':'')} onClick={()=>isLiked(name)}></div>
            </div>
            <div className={(descOverFlow?"h-auto":"" )+" px-5"}>
                <p className={(descOverFlow?"":`truncate`)+" font-medium py-3 text-justify"} onClick={()=>{setDescOverFlow(!descOverFlow)}}>{desc}</p>
            </div>
            <div className="h-[25px] flex items-center ml-5 mb-2 font-thin">
                <p>{date.slice(0,24)}</p>
            </div>
        </div>
    )
}