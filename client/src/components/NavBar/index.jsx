
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi";
import Avatar from '../Avatar';

export default function NavBar({ sideBarToggle, sideBarState }) {

    return (
        <>
            <div className="h-[10vh] flex items-center justify-between px-5 shadow-lg z-50 bg-white">
                <div className='flex'>
                    <Link to="/">
                        <img src='/logo/logo.png' className='h-[10vh] object-contain w-full' />
                    </Link>
                </div>
                <div className='relative border-2 bg-gray-200 rounded flex items-center justify-center hidden lg:block'>
                    <p className='absolute right-0'>🔍</p>
                    <input type='text' placeholder='Search...' className='block w-full pr-6 p-1 px-2 bg-transparent focus:border-gray-100' />
                </div>
                <div className='flex items-center'>
                    <div className='w-[6vh] h-[6vh]'>
                        <Avatar />
                    </div>
                    {
                        !sideBarState ?
                            <FiMenu className='ml-3 lg:hidden text-xl cursor-pointer' onClick={sideBarToggle} />
                            :
                            <FiX className='ml-3 lg:hidden text-xl cursor-pointer' onClick={sideBarToggle} />
                    }
                </div>
            </div>
        </>
    )
}