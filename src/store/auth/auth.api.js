import http from '../../core/http';

const api = {
  getAuth: async() => {
    return await http.get(`auth/me`)
  },
  login: async(email, password, rememberMe = false) => {
    return  await http.post(`auth/login`, {
      email, password, rememberMe
    })
  },
  LogOut: async() => {
    return  await http.delete(`auth/login`)
  }
};

export default api;