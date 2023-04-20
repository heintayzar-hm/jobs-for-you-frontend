// authAPI.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { MyKnownError} from '../../types';
import { getUsers } from '../../api/userApi/userApi';
export const getUsersThunk = createAsyncThunk<
  any,
  void,
    {
        rejectValue: MyKnownError[];
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
  } catch (error: any) {
    if (error.response.status === 401) {
      return rejectWithValue(error.response.data.errors);
    }
    return rejectWithValue(error.message);
  }
});

