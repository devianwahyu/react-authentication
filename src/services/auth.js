import axios from 'axios';
const baseUrl = 'http://notflixtv.herokuapp.com/api/v1/users';

export const login = async (payload) => {
  return await axios
    .post(`${baseUrl}/login`, payload)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const register = async (payload) => {
  return await axios
    .post(`${baseUrl}`, payload)
    .then((result) => {
      return result.data.data;
    })
    .catch((err) => {
      throw new Error(err);
    });
};