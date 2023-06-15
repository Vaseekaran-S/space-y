import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home';
import { Login } from './pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './layout';
import Profile from './pages/profile';

export default function App(){
  return(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout><Home/></Layout>} />
        <Route path='/login' element={<Layout><Login/></Layout>} />
        <Route path='/profile' element={<Layout><Profile/></Layout>} />
    </Routes>
  </BrowserRouter>
)}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);