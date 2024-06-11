
import { Link, useNavigate } from 'react-router-dom'
import { FiMenu, FiX } from "react-icons/fi";
import Avatar from '../Avatar';
import SearchInput from '../SearchInput';

export default function NavBar({ sideBarToggle, sideBarState }) {

    return (
        <>
            <div className="h-[10vh] flex items-center justify-between px-5 shadow-lg z-50 bg-white">
                <div className='flex'>
                    <Link to="/">
                        <img src='/logo/logo.png' className='h-[10vh] object-contain w-full' />
                    </Link>
                </div>
                <div className='relative flex items-center justify-center hidden lg:block'>
                    <SearchInput />
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