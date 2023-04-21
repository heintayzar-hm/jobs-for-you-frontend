// auth methods

import { UserLoginDetails, UserRegisterDetails } from '../../types';
import axiosInstance from '../axios';

// login
export const loginUser = async (credentials: UserLoginDetails) => {
  const response = await axiosInstance.post('auth/sign_in', credentials);
  return response;
};

export const registerUser = async (userData: UserRegisterDetails) => {
  const response = await axiosInstance.post('/auth', userData);
  return response;
};
