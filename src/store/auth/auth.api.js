import http from '../../core/api';

export const getAuth = () => {
  return http.get(`auth/me`)
};
export const login = (email, password, rememberMe = false) => {
  return http.post(`auth/login`, {
    email, password, rememberMe
  })
};

export const LogOut = () => {
  return http.delete(`auth/login`)
};
