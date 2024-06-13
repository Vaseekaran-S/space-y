import React, { useEffect, useState } from 'react'
import { FaMapMarkerAlt, FaVideo } from "react-icons/fa";
import { MdInsertPhoto, MdChangeCircle } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { getUser } from '../../api/users';

import TabPills from '../../components/TabPills';
import ProfileModal from '../../components/modals/ProfileForm';
import PostCard from '../../components/cards/PostCard';
import ProfileImageModal from '../../components/modals/ProfileImage';
import PostsSection from '../../components/sections/Posts';
import IsFollow from '../../components/FollowModule';


const tabs = [
  {
    button: "All",
    tabIcon: '',
    component: "No Media Found",
    alt: "No Media Found"
  },
  {
    button: "Posts",
    tabIcon: <MdInsertPhoto />,
    component: <PostsSection />,
    alt: "No Post Found"
  },
  {
    button: "Videos",
    tabIcon: <FaVideo />,
    component: "Videos",
    alt: "No Video Found"
  },
]

function Profile() {
  const { username } = useParams()
  const navigate = useNavigate();

  const [user, setUser] = useState(null)
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  const curUser = useSelector(store => store.profile.userData)

  const fetchUserData = async () => {
    const data = await getUser(username);
    setUser(data);
    setIsOwnProfile(false)
    if (!data?.username) navigate("/")
  }

  useEffect(() => {
    if (username === curUser?.username || !username) {
      setIsOwnProfile(true)
      setUser(curUser);
    } else {
      fetchUserData();
    }
  }, [username, curUser])

  return (
    <div className='p-5 lg:p-10'>
      <div className="user-details grid grid-cols-4 gap-5">
        <div className="col-span-4 md:col-span-1 flex-center flex-col">
          <ProfileImageModal isOwnProfile={isOwnProfile} username={user?.username} profileImage={user?.profileImage} />
          {isOwnProfile && <ProfileModal />}
          {isOwnProfile || <IsFollow userId={user?._id} fetchUserData={fetchUserData} />}
        </div>
        <div className="col-span-4 md:col-span-3 p-2">
          <h2 className='font-bold text-xl'>{user?.name}</h2>
          <h3 className='font-small text-sm text-gray-400 mb-2'>{user?.role}</h3>
          <p>{user?.bio}</p>
          {user?.location && <h3 className='flex gap-1 font-small text-sm items-center'><FaMapMarkerAlt size={11} />{user?.location}</h3>}
          <h4 className='font-medium text-sm'>Joined: {user?.joined}</h4>
          <div className='mt-3'>
            <span className="border px-2 py-1 font-medium text-md">{user?.followers?.length} followers | {user?.following?.length} following</span>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <TabPills tabs={tabs} />
      </div>

    </div>
  )
}

export default Profile
