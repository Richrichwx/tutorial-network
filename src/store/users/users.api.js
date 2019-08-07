import http from '../../core/api'

export const getUsers = (currentPage, pageSize) => {
  return http.get(`users?page=${currentPage}&count=${pageSize}`)
};

export const followUsers = (id) => {
  return http.post(`follow/` + id)
};

export const unFollowUsers = (id) => {
  return http.delete(`follow/` + id)
};