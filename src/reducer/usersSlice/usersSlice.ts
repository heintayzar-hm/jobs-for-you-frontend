/* eslint-disable max-len */
// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

import { UserData, UsersState } from '../../types';
import { getUsersThunk } from './apiThunks';

const initialState = {
    users: [],
    errors: [],
    loading: 'idle',
    user: {} as UserData,
} as UsersState;

const usersSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getUsersThunk.fulfilled, (state, action) => (
      { ...state, users: action.payload.attributes, loading: 'idle' }
    ));
  },
});
// if needed to export thunk


export default usersSlice.reducer;
