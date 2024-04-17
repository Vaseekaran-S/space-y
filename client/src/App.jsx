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

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.profile.isAuthenticated);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isAlreadyAuthenticated = await verifyToken();
        dispatch(setAuthentication(!!isAlreadyAuthenticated));

        if (isAlreadyAuthenticated) {
          const username = isAlreadyAuthenticated.user.username;
          const userData = await getUser(username);
          dispatch(setUserData(userData));
        }
      } catch (error) {
        // Handle authentication verification or user data fetching errors
        console.error('Authentication error:', error);
      }
    };

    checkAuthentication();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Home /> : <Login />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            {isAuthenticated && (
              <Route path="/profile" element={<Profile />} />
            )}
            <Route path="*" element={"Not Found"} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
