import React, { Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Layout from './layout';
import Loader from './components/Loader';

import { setAuthentication, setUserData } from './redux/profile/profileSlice';
import { useSelector, useDispatch } from 'react-redux';

import { verifyToken } from './api/auth';
import { getUser } from './api/users';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Profile = React.lazy(() => import('./pages/Profile'));

export default function App() {

    const dispatch = useDispatch()
    const isAuthenticated = useSelector(store => store.profile.isAuthenticated)

    const checkAuthentication = async () => {
        const isAlreadyAuthenticated = await verifyToken()
        dispatch(setAuthentication(!!isAlreadyAuthenticated))

        const username = isAlreadyAuthenticated?.user?.username
        const userData = await getUser(username)

        dispatch(setUserData(userData))
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
                            </>
                            :
                            <>
                                <Route path='/login' element={<Login />} />
                                <Route path='/signup' element={<SignUp />} />
                            </>
                        }

                        <Route path="*" element={"Not Found"} />
                    </Routes>
                </Layout>
            </Suspense>
        </BrowserRouter>
    )
}