import axios from 'axios';

const axiosConfig = {
  baseURL: "http://127.0.0.1:3000/",
};

const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((config :any) => {
  const currentUser = JSON.parse(localStorage.getItem('persist:currentUser') || '{}');
  const header = JSON.parse(currentUser.header);
  if (currentUser["header"] && header["access-token"]) {
    config.headers['access-token'] = header["access-token"];
    config.headers.client = header?.client;
    config.headers.uid = header?.uid;
    config.headers['token-type'] = header["token-type"];
    config.headers.expiry = header?.expiry;
  }
  return config;
});


axiosInstance.interceptors.response.use(
  (response) => response, (error) => {
    // Handle any errors here
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        // Handle 401 Unauthorized errors
        return Promise.reject(Object.assign(error, { message: 'You are not authorized to access this page' }));
      } if (status === 403) {
        // Handle 403 Forbidden errors
        return Promise.reject(Object.assign(error, { message: 'You are not allowed to access this page' }));
      } if (status === 404) {
        // Handle 404 Not Found errors
        return Promise.reject(Object.assign(error, { message: 'The requested resource was not found' }));
      } if (status === 500) {
        // Handle 500 Internal Server Error errors
        return Promise.reject(Object.assign(error, { message: 'Something went wrong. Please try again later' }));
      }
      // Handle any other errors
      return Promise.reject(Object.assign(error, { message: 'Something went wrong. Please try again later' }));
    }
    // Handle any network errors
    return Promise.reject(Object.assign(error, { message: 'Something went wrong. Please try again later' }));
  },
);

export default axiosInstance;
