import axios from 'axios';

export const axiosBase = axios.create({
    baseURL : "https://backend.groways.io/"
})