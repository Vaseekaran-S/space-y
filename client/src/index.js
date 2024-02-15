import React, { Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Layout from './layout';
import Loader from './components/Loader';

const Home =  React.lazy(()=> import('./pages/Home'));
const Login =  React.lazy(()=> import('./pages/Login'));
const SignUp =  React.lazy(()=> import('./pages/SignUp'));

// import SignUp from './pages/signup';
// import Profile from './pages/profile';
// import Login from './pages/login';
// import AddPost from './pages/addPost';
// import UserInfo from './pages/userInfo';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const checkAuthentication = () => {
    try {
      const token = localStorage.getItem("spaceY-token")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />

            {/* <Route path='/profile' element={<Profile />} />
            <Route path={`/:id`} element={<UserInfo />} />
            <Route path='/add' element={<AddPost />} /> */}
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);