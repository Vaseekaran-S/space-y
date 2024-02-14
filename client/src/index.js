import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Layout from './layout';

import Login from './pages/Login';
import Signup from './pages/SignUp';

import Home from './pages/index';
// import SignUp from './pages/signup';
// import Profile from './pages/profile';
// import Login from './pages/login';
// import AddPost from './pages/addPost';
// import UserInfo from './pages/userInfo';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuthentication = () => {
    try{
      const token = localStorage.getItem("spaceY-token")
    }catch(error){
      console.log(error);
    }
  }

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />

            {/* <Route path='/profile' element={<Profile />} />
            <Route path={`/:id`} element={<UserInfo />} />
            <Route path='/add' element={<AddPost />} /> */}
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);