import axios from 'axios'

const axiosInstance = axios.create({baseURL: 'http://localhost:5257/'});

export default axiosInstance;