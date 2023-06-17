
import { TbLayoutNavbarExpand, TbLayoutNavbarCollapse } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { auth } from '../../config/config'

export default function NavBar({toggle,state}){
    return(
        <div>
            <div className="h-[10vh] bg-gray-800 flex items-center justify-between px-5">
                <div className='flex'>
                    {state?<TbLayoutNavbarExpand onClick={toggle} className='w-[30px] h-[30px] text-white'/>:<TbLayoutNavbarCollapse onClick={toggle} className='w-[30px] h-[30px] text-white'/>}
                    <h3 className="font-bold text-xl text-white ml-3">SPACE Y</h3>
                </div>
                {auth.currentUser?.email}
            </div>
        </div>
    )
}