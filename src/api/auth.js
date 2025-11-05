import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

export const login = async (data) => {
  try {
    const res = await axios.post(`${API}/api/auth/login`, data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const register = async (data) => {
  try {
    const res = await axios.post(`${API}/api/auth/register`, data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const getProfile = async (token) => {
  try {
    const res = await axios.get(`${API}/api/auth/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};
