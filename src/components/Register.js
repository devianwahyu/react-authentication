import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { userRegister } from '../slices/authSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null
  });

  return (
    <div className='flex flex-row justify-between'>
      <img src='/images/mobil_bg.png' alt='background' className='w-8/12 bg-sky-600' />
      <div className='flex justify-center items-center grow'>
        <div className='flex flex-col grow mx-10 p-6'>
          <img src='/images/logo.png' alt='logo' className='w-20 rounded' />
          <p className='my-6 text-xl font-bold'>Create new Account</p>
          <div className='flex flex-col'>
            <label className='mb-2'>First Name</label>
            <input className='border rounded p-1' type={'text'} onChange={(e) => {
              setUser({
                first_name: e.target.value,
                last_name: user.last_name,
                email: user.email,
                password: user.password,
                password_confirmation: user.password_confirmation
              });
            }} />
            <label className='mt-3 mb-2'>Last Name</label>
            <input className='border rounded p-1' type={'text'} onChange={(e) => {
              setUser({
                first_name: user.first_name,
                last_name: e.target.value,
                email: user.email,
                password: user.password,
                password_confirmation: user.password_confirmation
              });
            }} />
            <label className='mt-3 mb-2'>Email</label>
            <input className='border rounded p-1' type={'text'} onChange={(e) => {
              setUser({
                first_name: user.first_name,
                last_name: user.last_name,
                email: e.target.value,
                password: user.password,
                password_confirmation: user.password_confirmation
              });
            }} />
            <label className='mt-3 mb-2'>Password</label>
            <input className='border rounded p-1' type={'password'} onChange={(e) => {
              setUser({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: e.target.value,
                password_confirmation: user.password_confirmation
              });
            }} />
            <label className='mt-3 mb-2'>Password Confirmation</label>
            <input className='border rounded p-1' type={'password'} onChange={(e) => {
              setUser({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                password: user.password,
                password_confirmation: e.target.value
              });
            }} />
            <p className='mt-3 text-gray-600'>Already have an account? <span className='cursor-pointer underline' onClick={() => navigate('/login')}>login</span></p>
            <button className='bg-blue-700 rounded p-2 text-white font-bold mt-6' onClick={() => {
              dispatch(userRegister(user));
            }}>Sign Up</button>
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

export default Register;