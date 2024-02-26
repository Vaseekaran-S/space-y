import React, { useState } from 'react'

import Button from '../../buttons/EditBtn';
import InputField from '../../InputField';
import PrimaryBtn from '../../buttons/PrimaryBtn';
import { ErrorMessage, Form, Formik } from 'formik';

function ProfileModal() {

    const [isModalActice, setIsModalActice] = useState(false);

    return (
        <div>
            <Button title="Edit Profile" active={false} className="mt-4" onClick={() => setIsModalActice(true)} />
            {
                isModalActice &&
                <div className='fixed flex-center top-0 left-0 w-[100vw] h-[100vh] z-50'>
                    <div className="bg-white rounded p-5 z-50">
                        <div className='flex  border-b-2 border-b-black'>
                            <h2 className='text-lg font-medium pb-2'>Update your Profile!</h2>
                            <span className='font-medium ml-5'>x</span>
                        </div>

                        {/* <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitForm}>
                            <Form>
                                <div className="flex-center flex-col m-auto mt-6 gap-4 w-[250px]">
                                    <div key={index}>
                                        <InputField {...field} />
                                        <ErrorMessage {...field} component="div" className='text-red-900 font-medium text-xs mt-1 ml-1' />
                                    </div>

                                    <PrimaryBtn placeholder={submitBtnPlaceholder} type="submit" />
                                </div>
                            </Form>
                        </Formik> */}
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={() => setIsModalActice(false)}></div>
                </div>
            }
        </div>
    )
}

export default ProfileModal
