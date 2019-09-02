import http from '../../core/http'

const api = {
  getUsers: async(currentPage, pageSize) => {
    return await http.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  followUsers: async(id) => {
    return await http.post(`follow/` + id)
  },
  unFollowUsers: async (id) => {
    return await http.delete(`follow/` + id)
  }
};

export default api;