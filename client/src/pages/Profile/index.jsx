import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import TabPills from '../../components/TabPills';

const tabs = [
  {
    title: "Posts",
    component: "Test"
  }
]

function Profile() {
  return (
    <div className='p-10'>
      <div className="user-details grid grid-cols-4 gap-10">
        <div className="col-span-1 flex-center">
            <img src="https://i.pinimg.com/736x/60/72/cb/6072cb81fbaac9f7750561675ef9ad71.jpg" alt="" className='rounded-full'/>
        </div>
        <div className="col-span-3 p-2">
          <h1 className='font-bold text-xl'>Vaseekaran S</h1>
          <h2 className='font-medium text-gray-400'>Astroner</h2>
          <h2 className='flex items-center'><FaMapMarkerAlt /> Chennai</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dolor dolore ad reprehenderit adipisci aliquam accusamus repellendus sunt perspiciatis voluptatibus sit quaerat omnis, qui dolorum assumenda consequuntur aliquid veritatis nulla.</p>
        </div>

      </div>

      <div className='mt-5'>
        <TabPills />
      </div>
      
    </div>
  )
}

export default Profile
