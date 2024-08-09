import axios from 'axios';

const api = axios.create({
  baseURL: 'https://disease.sh/v3',
});


export default api;