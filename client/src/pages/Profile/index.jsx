import React from 'react'
import { FaMapMarkerAlt, FaVideo } from "react-icons/fa";
import { MdInsertPhoto } from 'react-icons/md';
import { useSelector } from 'react-redux';

import TabPills from '../../components/TabPills';
import ProfileModal from '../../components/modals/ProfileForm';
import PostCard from '../../components/cards/PostCard';

const tabs = [
  {
      button: "Posts",
      tabIcon: <MdInsertPhoto />,
      component: <PostCard />,
      alt: "No Post Found"
  },
  {
      button: "Videos",
      tabIcon: <FaVideo />,
      component: "Videos",
      alt: "No Video Found"
  },
  {
      button: "Message",
      tabIcon: <FaVideo />,
      component: "Message",
      alt: "No Message Found"
  },
]

function Profile() {
  const user = useSelector( store => store.profile.userData )

  return (
    <div className='p-10'>
      <div className="user-details grid grid-cols-4 gap-5">
        <div className="col-span-1 flex-center">
            <img src={user?.image || "/images/profile/unknown.jpg"} alt="profile" className='rounded p-2 border'/>
        </div>
        <div className="col-span-3 p-2">
          <h1 className='font-bold text-xl'>{user?.name}</h1>
          <h2 className='font-medium text-gray-400'>{user?.role}</h2>
          <h2 className='flex items-center'><FaMapMarkerAlt/>{user?.location}</h2>
          <p>
            {user?.bio}
          </p>
          <ProfileModal />
        </div>
      </div>

      <div className='mt-5'>
        <TabPills tabs={tabs}/>
      </div>
      
    </div>
  )
}

export default Profile
