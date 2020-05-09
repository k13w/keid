import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fathomless-dusk-61093.herokuapp.com/'
});

export default api;