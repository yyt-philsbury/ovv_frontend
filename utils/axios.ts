import axios from 'axios';

export const setAxiosDefault = () => {
  axios.defaults.baseURL = 'http://localhost:8080/api';
  axios.defaults.timeout = 5000;
  axios.defaults.timeoutErrorMessage = 'Timed out attempting to reach server';
  axios.defaults.headers.post['Content-Type'] = 'application/json';
};

