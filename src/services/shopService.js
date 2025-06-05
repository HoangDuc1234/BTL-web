// import axios from 'axios';
import axios from "../axios";

export const getAllShops = () => {
  return axios.get(`/shop`);
};

export const getShopById = (shopId) => {
  return axios.get(`/shop/${shopId}`);
};

export const createShop = (shopData) => {
  return axios.post(`/shop`, shopData);
};

export const updateShop = (shopId, shopData) => {
  return axios.put(`/shop/${shopId}`, shopData);
};

export const getShopByUserId = (userId) => {
  return axios.get(`/shop/user/${userId}`);
};

export const deleteShop = (shopId) => {
  return axios.delete(`/shop/${shopId}`);
};

// Duyệt shop
export const approveShop = (shopId) => {
  return axios.put(`/shop/${shopId}/approve`);
};

// Từ chối shop
export const rejectShop = (shopId, data) => {
  return axios.put(`/shop/${shopId}/reject`, data);
};

// Lấy danh sách shop đang chờ duyệt
export const getPendingShops = () => {
  return axios.get(`/shop/admin/pending`);
};
