import React, { useState } from 'react'
import { FiX } from "react-icons/fi";

import { ErrorMessage, Form, Formik } from 'formik';
import * as Yup from 'yup';

import EditProfile from '../../../data/inputs/EditProfile';

import Button from '../../buttons/EditBtn';
import InputField from '../../InputField';
import PrimaryBtn from '../../buttons/PrimaryBtn';

import { updateUser } from '../../../api/users/index'

import { useSelector, useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/profile/profileSlice';

function ProfileModal() {
    const dispatch = useDispatch()
    const { username, name, location, bio, role } = useSelector(store => store.profile.userData)

    const initialValues = { name, location, bio, role }
    const editProfileFieldsValidation = Yup.object({
        name: Yup.string().required('Name is required *')
    });

    const editProfile = async(data) => {
        const response = await updateUser(username, data)
        dispatch(updateUserData(response?.data))
        closeModal()
    }

    const [isModalActice, setIsModalActice] = useState(false);
    const closeModal = () => setIsModalActice(false)

    return (
        <>
            <Button title="Edit Profile" active={false} className="mt-4 w-auto px-3 text-sm" onClick={() => setIsModalActice(true)} />
            {
                isModalActice &&
                <div className='fixed flex-center top-0 left-0 w-[100vw] h-[100vh] z-50'>
                    <div className="bg-white rounded p-7 z-50">
                        <div className='flex items-start justify-between border-b-2 border-b-black'>
                            <h2 className='text-lg font-medium pb-2'>Update your Profile!</h2>
                            <FiX className='text-xl font-bold text-white bg-red-900 p-1 rounded-full cursor-pointer' onClick={closeModal}/>
                        </div>

                        <Formik initialValues={initialValues} validationSchema={editProfileFieldsValidation}  onSubmit={editProfile}>
                            <Form>
                                <div className="flex-center flex-col m-auto mt-6 gap-4 w-[300px] lg:w-[350px]">
                                    {EditProfile?.map((field, index) => {
                                        return (
                                            <div key={index} className='w-full'>
                                                <InputField {...field} />
                                                <ErrorMessage {...field} component="div" className='text-red-900 font-medium text-xs mt-1 ml-1' />
                                            </div>
                                        )
                                    })}
                                    <PrimaryBtn placeholder="Save" type="submit" />
                                </div>
                            </Form>
                        </Formik>

                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={closeModal}></div>
                </div>
            }
        </>
    )
}

export default ProfileModal
