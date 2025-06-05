// import axios from "axios";
import axios from "../axios";

export const fetchAllUsersApi = () => {
  return axios.get("/user");
};

export const createUserApi = (userData) => {
  return axios.post("/user", userData);
};

export const updateUserApi = (userId, userData) => {
  return axios.put(`/user/${userId}`, userData);
};

export const deleteUserApi = (userId) => {
  return axios.delete(`/user/${userId}`);
};
