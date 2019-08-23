import http from '../../core/http';

const api = {
  getProfile:(id) => {
    return  http.get(`profile/` + id)
  },
  getStatus: (id) => {
    return  http.get(`profile/status/` + id)
  },
  updateStatus:(status) => {
    return  http.put(`profile/status`, {
      status: status
    })
  }
};

export default api;
