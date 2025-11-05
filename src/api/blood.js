import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

export const getBloodUnits = async () => {
  try {
    const res = await axios.get(`${API}/api/blood`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const getBloodUnitByType = async (type) => {
  try {
    const res = await axios.get(`${API}/api/blood/type/${type}`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const addBloodUnit = async (data, token) => {
  try {
    const res = await axios.post(`${API}/api/blood`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const updateBloodUnit = async (id, data, token) => {
  try {
    const res = await axios.put(`${API}/api/blood/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const deleteBloodUnit = async (id, token) => {
  try {
    const res = await axios.delete(`${API}/api/blood/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};
