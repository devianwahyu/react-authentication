import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { userLogin } from '../slices/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: null,
    password: null
  });

  const buttonSubmit = () => {
    if (user.email === 'admin@gmail.com') {
      localStorage.setItem('admin', 'admin');
      navigate('/dashboard');
    } else {
      dispatch(userLogin(user));
      navigate('/');
    }
  };

  return (
    <div className='flex flex-row justify-between'>
      <img src='/images/mobil_bg.png' alt='background' className='w-8/12 bg-sky-600' />
      <div className='flex justify-center items-center grow'>
        <div className='flex flex-col grow mx-10 p-6'>
          <img src='/images/logo.png' alt='logo' className='w-20 rounded' />
          <p className='my-6 text-xl font-bold'>Welcome and Login</p>
          <div className='flex flex-col'>
            <label className='mt-3 mb-2'>Email</label>
            <input className='border rounded p-1' type={'text'} onChange={(e) => setUser({
              email: e.target.value,
              password: user.password
            })} />
            <label className='mt-3 mb-2'>Password</label>
            <input className='border rounded p-1' type={'password'} onChange={(e) => setUser({
              email: user.email,
              password: e.target.value
            })} />
            <p className='mt-3 text-gray-600'>Don't have an account yet? <span className='cursor-pointer underline' onClick={() => navigate('/register')}>register</span></p>
            <button type='submit' className='bg-blue-700 rounded p-2 text-white font-bold mt-6' onClick={buttonSubmit}>Sign In</button>
            <GoogleLogin
              className='mt-3'
              clientId='798968435463-68docej8r36dc32ssojo9o6950lhihac.apps.googleusercontent.com'
              buttonText='Login with Google'
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;