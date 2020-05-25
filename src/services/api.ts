import axios from 'axios';

const api = axios.create({
    baseURL: 'http://138.68.50.156:7000'
});

export default api;