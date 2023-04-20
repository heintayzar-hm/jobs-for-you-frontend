// auth methods

import axiosInstance from '../axios';

// login
export const loginUser = async (credentials: any) => {
  const response = await axiosInstance.post('auth/sign_in', credentials);
  return response;
};

export const registerUser = async (userData: any) => {
  const response = await axiosInstance.post('/auth', userData);
  return response;
};
