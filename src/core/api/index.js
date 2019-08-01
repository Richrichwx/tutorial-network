import * as axios from 'axios';

const http = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "f60e318e-a7eb-46ab-aa61-dd840b8c28fa"
  }
});

export default http;

