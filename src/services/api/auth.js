import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

// Registration function
export const registerUser = async (data) => {
  const { role, ...formData } = data;
  const endpoint = role === 'Driver' ? '/auth/driver/register' : '/auth/customer/register';
  const res = await API.post(endpoint, formData);
  return res.data;
};

// Login functions
export const loginUser = async (data) => {
  const { role, email, password } = data;
  const endpoint = role === 'driver' ? '/auth/driver/login' : '/auth/customer/login';
  const res = await API.post(endpoint, { email, password });
  return res.data;
};

// OTP confirmation functions
export const confirmOTP = async (data) => {
  const { role, email, otp } = data;
  const endpoint = role === 'driver' ? '/auth/driver/confirm-otp' : '/auth/customer/confirm-otp';
  const res = await API.post(endpoint, { email, otp });
  return res.data;
};

// Forgot password function
export const forgotPassword = async (email) => {
  const res = await API.post('/auth/forgot-password', { email });
  return res.data;
};

// Reset password function
export const resetPassword = async (data) => {
  const { token, password } = data;
  const res = await API.post('/auth/reset-password', { token, password });
  return res.data;
};

// Logout function
export const logout = async () => {
  const res = await API.post('/auth/logout');
  return res.data;
};

// Get current user function
export const getCurrentUser = async () => {
  const res = await API.get('/auth/me');
  return res.data;
};

export default API;
