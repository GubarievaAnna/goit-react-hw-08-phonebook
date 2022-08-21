import axios from 'axios';

axios.defaults.baseURL =
  'https://62fea373a85c52ee483af3f0.mockapi.io/phonebook';

export const getContactsApi = () => {
  return axios('/contacts').then(response => response.data);
};

export const addContactsApi = item => {
  return axios.post('/contacts', item).then(response => response.data);
};

export const removeContactsApi = id => {
  return axios.delete(`/contacts/${id}`).then(() => id);
};
