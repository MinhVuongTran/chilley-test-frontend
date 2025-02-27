import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_PUBLIC_API_URL,
});

export default axiosConfig;
