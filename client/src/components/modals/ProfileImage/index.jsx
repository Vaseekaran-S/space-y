import React, { useState } from 'react'
import { MdChangeCircle } from 'react-icons/md';

import { useSelector, useDispatch } from 'react-redux';

import { updateUser } from '../../../api/users/index'
import { updateUserData } from '../../../redux/profile/profileSlice';

import PopupModal from '..';
import DragAndDrop from '../../DragAndDrop';

function ProfileImageModal() {
    const dispatch = useDispatch()
    const { username, profileImage } = useSelector(store => store.profile.userData)

    const updateProfile = async (data) => {
        const response = await updateUser(username, { profileImage: data })
        dispatch(updateUserData(response?.data))
        closeModal()
    }

    const imagePath = `${username}/profile/${Date.now()}.jpg`

    const [isModalActice, setIsModalActice] = useState(false);
    const openModal = () => setIsModalActice(true);
    const closeModal = () => setIsModalActice(false);

    return (
        <div>
            <div className='relative flex flex-col items-center gap-2'>
                <img src={profileImage || "/images/profile/unknown.jpg"} alt="profile" className='rounded p-2 border h-[125px] w-[125px] object-cover' />
                <MdChangeCircle size={30} className='absolute bottom-0 cursor-pointer' onClick={openModal} />
            </div>
            {
                isModalActice &&
                <PopupModal title="Update Profile Image!" closeModal={closeModal}>
                    <DragAndDrop updateImage={updateProfile} imagePath={imagePath}/>
                </PopupModal>
            }
        </div>
    )
}

export default ProfileImageModal
