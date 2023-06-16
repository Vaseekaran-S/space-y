import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import Home from './pages/home';
import { SignUp } from './pages/signup';
import Layout from './layout';
import Profile from './pages/profile';
import Login from './pages/login';

import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './data/reducer';

const store = createStore(reducer);


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);