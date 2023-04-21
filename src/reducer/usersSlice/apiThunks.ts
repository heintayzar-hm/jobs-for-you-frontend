// authAPI.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import {  UsersResponseType} from '../../types';
import { getUsers } from '../../api/userApi/userApi';
import { isAxiosError } from 'axios';
export const getUsersThunk = createAsyncThunk<
  UsersResponseType,
  void,
    {
        rejectValue: string[];
      }
    >('/users', async (_, { rejectWithValue }) => {
  try {
      const response = await getUsers();
    if (response.status === 200) {
      return {
        attributes: response?.data,
        status: response?.status,
      };
    }
    return rejectWithValue(response.data.errors);
  } catch (error) {
    if (isAxiosError(error)) {
      if (error?.response?.status === 401) {
        return rejectWithValue(error.response.data.errors);
      }
      return rejectWithValue([error?.message]);
    }
    return rejectWithValue(["Something went wrong"]);

  }
});

