// import axios from "axios";
import axios from "../axios";
const API_URL = () => {
  if (process.env.NODE_ENV === "production") {
    return `${window.location.protocol}//${window.location.hostname}:3434`;
  }
  return "http://localhost:3434";
};

export const fetchAllUsersApi = () => {
  return axios.get(`${API_URL}/api/user`);
};

export const createUserApi = (userData) => {
  return axios.post(`${API_URL}/api/user`, userData);
};

export const updateUserApi = (userId, userData) => {
  return axios.put(`${API_URL}/api/user/${userId}`, userData);
};

export const deleteUserApi = (userId) => {
  return axios.delete(`${API_URL}/api/user/${userId}`);
};
