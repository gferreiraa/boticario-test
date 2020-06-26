import axios from 'axios';

const axiosClientPurchase = axios.create({
  baseURL: 'http://localhost:5000/',
});

export default axiosClientPurchase;
