import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from '../services/auth';

export const userLogin = createAsyncThunk(
  'auth/login',
  async (payload) => {
    try {
      const res = await login(payload);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const userRegister = createAsyncThunk(
  'auth/register',
  async (payload) => {
    try {
      const res = await register(payload);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: null,
    isError: null
  },
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.user = null;
      state.isError = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      console.log('payloadLogin', payload.token);
      state.loading = false;
      state.user = payload;
      state.isError = null;
      localStorage.setItem('token', JSON.stringify(payload.token));
      alert(localStorage.getItem('token') ? 'Berhasil dapat token' : 'Token gagal didapatkan');
    },
    [userLogin.rejected]: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isError = action.error.message;
    },
    [userRegister.pending]: (state) => {
      state.loading = true;
      state.user = null;
      state.isError = null;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      console.log('payloadRegister', payload.token);
      state.loading = false;
      state.user = payload;
      state.isError = null;
      localStorage.setItem('token', JSON.stringify(payload.token));
      alert(localStorage.getItem('token') ? 'Berhasil dapat token' : 'Token gagal didapatkan');
    },
    [userRegister.rejected]: (state, action) => {
      state.loading = false;
      state.user = null;
      state.isError = action.error.message;
    }
  }
});

export default authSlice.reducer;