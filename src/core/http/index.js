import * as axios from 'axios';

const http = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "c8109eda-b7f6-4bc1-b780-d5b440b4b02f"
  }
});

export default http;

