import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Layout from './layout';
import Loader from './components/Loader';
import { checkUser } from './api/users';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Profile = React.lazy(() => import('./pages/Profile'));


// import SignUp from './pages/signup';
// import Profile from './pages/profile';
// import Login from './pages/login';
// import AddPost from './pages/addPost';
// import UserInfo from './pages/userInfo';

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuthentication = async () => {
    const isAlreadyAuthenticated = await checkUser()
    console.log("IsAuthenticated ", isAlreadyAuthenticated);
    setIsAuthenticated(isAlreadyAuthenticated)
  }

  useEffect(() => {
    checkAuthentication()
  }, [])

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Layout>
          <Routes>
            <Route path='/' element={isAuthenticated?<Home />:<Login/>} />
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
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);