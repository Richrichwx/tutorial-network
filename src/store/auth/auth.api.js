import http from '../../core/api';

export const getAuth = () => {
  return http.get(`auth/me`)
};
export const LoginAuth = () => {
  return http.post(`auth/login`)
};
