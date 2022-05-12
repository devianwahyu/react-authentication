import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('admin');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={token ? <Home /> : <Navigate to={'/login'} />} />
        <Route path='/dashboard' element={isAdmin ? <Dashboard /> : <Navigate to={'/login'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;