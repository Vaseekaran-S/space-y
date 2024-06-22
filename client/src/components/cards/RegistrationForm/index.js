import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import InputField from '../../InputField'
import PrimaryBtn from '../../buttons/PrimaryBtn'
import Alerts from '../../Alerts';
import Loader from '../../Loader';

import loginFieldsData from '../../../data/inputs/Login'
import signUpFieldsData from '../../../data/inputs/SignUp'


import { useDispatch } from 'react-redux';
import { setAuthentication } from '../../../redux/profile/profileSlice'; 

import { logIn, signUp } from '../../../api/auth';

export default function RegistrationForm({ type }) {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const login = type === 'login';

    const signupValidationSchema = Yup.object({
        name: Yup.string().required('Name is required *'),
        username: Yup.string().required('User Name is required *'),
        email: Yup.string().email('Invalid email address').required('Email is required *'),
        password: Yup.string().required('Password is required *'),
    });

    const loginValidationSchema = Yup.object({
        username: Yup.string().required('User Name is required *'),
        password: Yup.string().required('Password is required *'),
    });

    const renderingData = {
        title : (login) ? 'Welcome Back!' : 'Signup for Unlimeted Fun!',
        submitBtnPlaceholder : (login) ? 'Login' : 'Sign up',
        fields : (login) ? loginFieldsData : signUpFieldsData,
        boxTitle : (login) ? 'New to Space Y?' : 'Already have an account?',
        bottomBtn : (login) ? 'Sign up' : 'Login',
        bottomAction : (login) ? '/signup' : '/login',
        validationSchema: (login) ? loginValidationSchema : signupValidationSchema,
        action : (login) ? logIn : signUp
    }

    const { title, submitBtnPlaceholder, fields, boxTitle, bottomBtn, bottomAction, validationSchema, action } = renderingData

    const initialValues = {
        name: "",
        email: "",
        password: "",
        username: ""
    }
    
    const [isLoaderOn, setIsLoaderOn] = useState(false);
    const [isAlertOn, setIsAlertOn] = useState(false);
    const [alertData, setAlertData] = useState({});

    const alertOnFun = (res) =>{
        setAlertData(res)
        setIsAlertOn(true)
        setTimeout(() => {
            setIsAlertOn(false)
        }, 4000)
    };

    const onSubmitForm = async (values) => {
        setIsLoaderOn(true)
        try {
            const responce = await action(values)
            alertOnFun(responce)
            if(responce?.status == 202){
                localStorage.setItem("spaceY-token",responce?.token)
                dispatch(setAuthentication(true))
                dispatch(setAuthentication(true))
                navigate("/")
            }
            console.log(responce);
        } catch (err) {
            console.log(err);
        }
        setIsLoaderOn(false)
    }

    return (
        <>
            {isAlertOn && <Alerts {...alertData} />}
            {isLoaderOn && <Loader />}
            <div className='h-full flex-center flex-col gap-5'>
                <div className="rounded shadow border p-8 bg-white max-w-sm sm:min-w-[350px] hover:shadow-lg">
                    <Link to="/">
                        <img src='/logo/logo.png' className='h-[10vh] object-contain w-full' alt='logo' />
                    </Link>
                    <h2 className='font-bold text-xl my-5 text-center'>
                        {title}
                    </h2>
                    <hr />
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmitForm}>
                        <Form>
                            <div className="flex-center flex-col m-auto mt-6 gap-4 w-[250px]">
                                {fields?.map((field, index) => {
                                    return (
                                        <div key={index} className='w-full'>
                                            <InputField {...field}/>
                                            <ErrorMessage {...field} component="div" className='text-red-900 font-medium text-xs mt-1 ml-1' />
                                        </div>
                                    )
                                })}
                                <PrimaryBtn placeholder={submitBtnPlaceholder} type="submit" />
                            </div>
                        </Form>
                    </Formik>
                    {login && 
                        <h2 className='font-medium text-md mt-5 text-center underline'>
                            <Link to='/'>Forget Password</Link>
                        </h2>
                    }
                </div>
                <div className="rounded shadow border p-5 sm:min-w-[350px] hover:shadow-lg">
                    <h2 className='font-medium text-lg text-center'>
                        {boxTitle} <Link className='text-blue-700 hover:text-blue-800 ml-1' to={bottomAction}>{bottomBtn}</Link>
                    </h2>
                </div>
            </div>
        </>
    )
}