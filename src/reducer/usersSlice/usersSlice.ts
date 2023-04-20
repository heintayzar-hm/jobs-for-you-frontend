/* eslint-disable max-len */
// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

import { UserLoginResponse, UsersState } from '../../types';
import { getUsersThunk } from './apiThunks';

const initialState = {
    users: [],
    errors: [],
    loading: 'idle',
    user: {},
} as UsersState;

const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.fulfilled, (state, action) => (
      { ...state, users: action.payload, loading: 'idle' }
    ));
  },
});
// if needed to export thunk


export default usersSlice.reducer;
