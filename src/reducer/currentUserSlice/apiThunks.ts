// authAPI.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../api/authApi/auth';
import { Header, UserLoginDetails, UserLoginResponse, UserRegisterDetails} from '../../types';
import {  isAxiosError } from 'axios';
export const loginThunk = createAsyncThunk<
    UserLoginResponse,
    UserLoginDetails,
    {
        rejectValue: string[]
      }
    >('/auth/login', async (credentials, { rejectWithValue }) => {
  try {
    const response = await loginUser(credentials);
    if (response.status === 200) {
      const responseHeaders = {
        'access-token': response.headers['access-token'],
        'token-type': response.headers['token-type'],
        client: response.headers.client,
        expiry: response.headers.expiry,
        uid: response.headers.uid,
      } as Header;
      return {
        header: responseHeaders,
        attributes: response?.data?.data,
        status: response?.status,
      };
    }
    return rejectWithValue(response.data.errors);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error?.response?.status === 401) {
        return rejectWithValue(error.response.data.errors);
      }
      return rejectWithValue([
         error.message,
      ]);
    }
    return rejectWithValue([
      "Something went wrong"
    ]);
  }
});


export const registerThunk = createAsyncThunk<
  UserLoginResponse, UserRegisterDetails, { rejectValue: string[] }
>
  ('/auth/register', async (userData, { rejectWithValue }) => {
  try {
    const response = await registerUser(userData);
    if (response.status === 200) {
      const responseHeaders = {
        'access-token': response.headers['access-token'],
        'token-type': response.headers['token-type'],
        client: response.headers.client,
        expiry: response.headers.expiry,
        uid: response.headers.uid,
      } as Header;

      return {
        header: responseHeaders,
        attributes: response?.data?.data,
        status: response?.status,
      };
    }
    return rejectWithValue(response.data.errors);
  } catch (error) {
    if(isAxiosError(error)) {
      if (error?.response?.status === 401) {
        return rejectWithValue(error.response.data.errors);
      }
      return rejectWithValue([
        error.message,
      ]);
    }
    return rejectWithValue([
      "Something went wrong"
    ]);
  }
  });

