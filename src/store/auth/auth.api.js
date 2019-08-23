import http from '../../core/http';

const api = {
  getAuth: () => {
    return http.get(`auth/me`)
  },
  login: (email, password, rememberMe = false) => {
    return http.post(`auth/login`, {
      email, password, rememberMe
    })
  },
  LogOut: () => {
    return http.delete(`auth/login`)
  }
};

export default api;