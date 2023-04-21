// user data handler

import axiosInstance from '../axios';

export const getUsers = async () => {
  const response = await axiosInstance.get('/api/users');
  return response;
};
