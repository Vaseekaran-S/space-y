import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from "react-redux"

import './index.css';
import Layout from './layout';
import Loader from './components/Loader';

import { checkUser, getUser } from './api/users';
import { setAuthentication, setUserData } from './redux/profile/profileSlice';
import { useSelector } from 'react-redux';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Profile = React.lazy(() => import('./pages/Profile'));

export default function App() {
    
    const dispatch = useDispatch()
    const isAuthenticated = useSelector( store => store.profile.isAuthenticated )

    const checkAuthentication = async () => {

        const isAlreadyAuthenticated = await checkUser()
        console.log("IsAuthenticated ", isAlreadyAuthenticated);
        dispatch(setAuthentication(isAlreadyAuthenticated && true))

        const userData = await getUser(isAlreadyAuthenticated?.user?.username)
        dispatch(setUserData(userData))

        console.log("User Data", userData);
    }

    useEffect(() => {
        checkAuthentication()
    }, [isAuthenticated])

    return (
        <BrowserRouter>
            <Suspense fallback={<Loader />}>
                <Layout>
                    <Routes>
                        <Route path='/' element={isAuthenticated ? <Home /> : <Login />} />
                        {isAuthenticated ?
                            <>
                                <Route path='/profile' element={<Profile />} />
                                <Route path='/login' element={<Profile />} />
                                <Route path='/signup' element={<Profile />} />
                            </>
                            :
                            <>
                                <Route path='/login' element={<Login />} />
                                <Route path='/signup' element={<SignUp />} />
                            </>
                        }
                        <Route path="*" element={"Not Found"}/>
                    </Routes>
                </Layout>
            </Suspense>
        </BrowserRouter>
    )
}