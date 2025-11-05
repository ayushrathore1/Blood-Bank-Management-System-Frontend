import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

export const getDonors = async () => {
  try {
    const res = await axios.get(`${API}/api/donors`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const getMyDonorProfile = async (token) => {
  try {
    const res = await axios.get(`${API}/api/donors/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const addDonor = async (data, token) => {
  try {
    const res = await axios.post(`${API}/api/donors`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const updateDonorProfile = async (data, token) => {
  try {
    const res = await axios.put(`${API}/api/donors/me`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};
