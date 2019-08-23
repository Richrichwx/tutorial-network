import http from '../../core/http'

const api = {
  getUsers:(currentPage, pageSize) => {
    return http.get(`users?page=${currentPage}&count=${pageSize}`)
  },
  followUsers: (id) => {
    return http.post(`follow/` + id)
  },
  unFollowUsers: (id) => {
    return http.delete(`follow/` + id)
  }
};

export default api;