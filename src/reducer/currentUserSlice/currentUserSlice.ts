/* eslint-disable max-len */
// authSlice.js
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {  createSlice } from '@reduxjs/toolkit';
import {
  loginThunk, registerThunk,
} from './apiThunks';
import { Header, UserLoginResponse, UserState } from '../../types';

const authPersistConfig = {
  key: 'currentUser',
  storage,
  whitelist: ['isSignedIn', 'attributes', 'header'],
  blacklist: ['error', 'loading'],
};

const initialState = {
  isSignedIn: false,
  loading: 'idle',
  attributes: {} as UserLoginResponse['attributes'],
  errors: [],
  header: {} as Header,
} as UserState;

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    logout: (state) => ({
      ...state, isSignedIn: false, attributes: {} as UserLoginResponse['attributes'], errors: [],
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(loginThunk.fulfilled, (state, action) => ({
      ...state, isSignedIn: true, attributes: action.payload.attributes, error: [], header: action.payload.header,
    }));
    builder.addCase(loginThunk.rejected, (state, action) => ({
      ...state, errors: action.payload || [],
    }));
  },
});
// if needed to export thunk

export { loginThunk, registerThunk };
export const { logout } = currentUserSlice.actions;
const persistedAuthReducer = persistReducer(authPersistConfig, currentUserSlice.reducer);

export default persistedAuthReducer;
