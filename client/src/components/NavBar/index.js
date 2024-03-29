
import Avatar from 'react-avatar'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function NavBar(){
    const navigate = useNavigate()

    const currentUser = useSelector( store => store.profile.userData )

    return(
        <>
            <div className="h-[10vh] flex items-center justify-between px-5 shadow-lg z-50 bg-white">
                <div className='flex'>
                    <Link to="/">
                        <img src='/logo/logo.png' className='h-[10vh] object-contain w-full'/>
                    </Link>
                </div>
                <div className='relative border-2 bg-gray-200 rounded flex items-center justify-center'>
                    <p className='absolute right-0'>🔍</p>
                    <input type='text' placeholder='Search...' className='block w-full pr-6 p-1 px-2 bg-transparent focus:border-gray-100'/>
                </div>
                {(currentUser?.email)?
                    <Avatar size='40' round={true} name={currentUser?.name} onClick={()=>{(window.location.pathname=='/profile')?navigate('/'):navigate('/profile')}} className='cursor-pointer'/>
                    :
                    <Avatar facebookId="100008343750912" size="40" onClick={()=>navigate('/')} className='cursor-pointer' round={true}/>
                }
            </div>
        </>
    )
}