import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;

// Customize endpoints based on your backend's hospital routes
export const getHospitals = async () => {
  try {
    const res = await axios.get(`${API}/api/hospitals`);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

export const addHospital = async (data, token) => {
  try {
    const res = await axios.post(`${API}/api/hospitals`, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Network error" };
  }
};

// Add more functions as needed (update, delete etc.)
