import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Home from './pages/home';
import { SignUp } from './pages/signup';
import Layout from './layout';
import Profile from './pages/profile';
import Login from './pages/login';
import AddPost from './pages/addPost';

export default function App() {

  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/add' element={<AddPost />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);