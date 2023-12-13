
import { TbLayoutNavbarExpand, TbLayoutNavbarCollapse } from 'react-icons/tb'
import { auth } from '../../config/config'
import Avatar from 'react-avatar'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar({toggle,state}){
    const navigate = useNavigate()
    
    const [currentUser, setCurrentUser] = useState('')
    
    useEffect(()=>{        
        onAuthStateChanged(auth, (e)=>{
            setCurrentUser(e)
        })
    },[])

    return(
        <div>
            <div className="h-[10vh] bg-gray-800 flex items-center justify-between px-5">
                <div className='flex'>
                    {state?<TbLayoutNavbarExpand onClick={toggle} className='w-[30px] h-[30px] text-white'/>:<TbLayoutNavbarCollapse onClick={toggle} className='w-[30px] h-[30px] text-white'/>}
                    <h3 className="font-bold text-xl text-white ml-3">SPACE Y</h3>
                </div>
                {(currentUser?.email)?
                    <Avatar size='40' round={true} name={currentUser?.email} onClick={()=>{(window.location.pathname=='/profile')?navigate('/'):navigate('/profile')}} className='cursor-pointer'/>
                    :
                    <Avatar facebookId="100008343750912" size="40" onClick={()=>navigate('/signup')} className='cursor-pointer' round={true}/>
                }
            </div>
        </div>
    )
}