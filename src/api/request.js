import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

export const getRequests = async () => {
  try {
    const res = await axios.get(`${API}/api/requests`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const getMyRequests = async (token) => {
  try {
    const res = await axios.get(`${API}/api/requests/my`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const addRequest = async (data, token) => {
  try {
    const res = await axios.post(`${API}/api/requests`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const updateRequestStatus = async (id, data, token) => {
  try {
    const res = await axios.put(`${API}/api/requests/${id}`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};
