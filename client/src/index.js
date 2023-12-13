import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'

import './index.css';
import Home from './pages/home';
import { SignUp } from './pages/signup';
import Layout from './layout';
import Profile from './pages/profile';
import Login from './pages/login';
import AddPost from './pages/addPost';
import store from "./redux/store/store"
import UserInfo from './pages/userInfo';

export default function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/profile' element={<Profile />} />
            <Route path={`/:id`} element={<UserInfo />} />
            <Route path='/login' element={<Login />} />
            <Route path='/add' element={<AddPost />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);