import http from '../../core/http';

const api = {
  getProfile: async(id) => {
    return await http.get(`profile/` + id)
  },
  getStatus: async(id) => {
    return  await http.get(`profile/status/` + id)
  },
  updateStatus: async(status) => {
    return await http.put(`profile/status`, {
      status: status
    })
  }
};

export default api;
