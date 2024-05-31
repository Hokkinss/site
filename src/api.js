import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/v1/auth/';

export const register = async (name, email, username, password) => {
  try {
    const response = await axios.post(`${baseUrl}register`, {
      name,
      email,
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${baseUrl}login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(`${baseUrl}refresh`, {
      refreshToken,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async (token) => {
  try {
    const response = await axios.get(`${baseUrl}user?token=${token}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};