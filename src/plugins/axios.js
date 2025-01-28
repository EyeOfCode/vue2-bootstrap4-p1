import Vue from 'vue';
import axios from 'axios';

const baseApi = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://localhost:8000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

Vue.prototype.$baseApi = baseApi;

export { baseApi };
