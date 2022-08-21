import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const registerUserApi = data => {
  return axios.post('/users/signup', data).then(response => response.data);
};

export const loginUserApi = data => {
  return axios.post('/users/login', data).then(response => response.data);
};
