import React, { useState } from 'react'
import { MdChangeCircle } from 'react-icons/md';

import { useSelector, useDispatch } from 'react-redux';

import { updateUser } from '../../../api/users/index'
import { updateUserData } from '../../../redux/profile/profileSlice';

import PopupModal from '..';
import DragAndDrop from '../../DragAndDrop';
import PrimaryBtn from '../../buttons/PrimaryBtn';


function ProfileImageModal() {
    const dispatch = useDispatch()
    const { username, name, location, bio, image } = useSelector(store => store.profile.userData)

    const editProfile = async (data) => {
        const response = await updateUser(username, data)
        dispatch(updateUserData(response?.data))
        closeModal()
    }

    const [isModalActice, setIsModalActice] = useState(false);
    const openModal = () => setIsModalActice(true);
    const closeModal = () => setIsModalActice(false);

    return (
        <div>
            <div className='relative flex flex-col items-center gap-2'>
                <img src={image || "/images/profile/unknown.jpg"} alt="profile" className='rounded p-2 border min-h-[100px]' />
                <MdChangeCircle size={30} className='absolute bottom-0 cursor-pointer' onClick={openModal} />
            </div>
            {
                isModalActice &&
                <PopupModal title="Update Profile Image!" closeModal={closeModal}>
                    <DragAndDrop />
                </PopupModal>
            }
        </div>
    )
}

export default ProfileImageModal
