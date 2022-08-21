import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUserApi, registerUserApi } from 'utils/authApi';

export const registerUser = createAsyncThunk(
  'authRegister',
  async (info, { rejectWithValue }) => {
    try {
      const data = await registerUserApi(info);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'authLogin',
  async (info, { rejectWithValue }) => {
    try {
      const data = await loginUserApi(info);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
