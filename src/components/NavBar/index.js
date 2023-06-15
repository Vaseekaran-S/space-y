
import { TbLayoutNavbarExpand, TbLayoutNavbarCollapse } from 'react-icons/tb'

export default function NavBar({toggle,state}){
    return(
        <div>
            <div className="h-[60px] bg-gray-800 flex items-center justify-between px-5">
                <h3 className="font-bold text-xl text-white">SPACE Y</h3>
                {state?<TbLayoutNavbarExpand onClick={toggle} className='w-[30px] h-[30px] text-white'/>:<TbLayoutNavbarCollapse onClick={toggle} className='w-[30px] h-[30px] text-white'/>}
            </div>
        </div>
    )
}