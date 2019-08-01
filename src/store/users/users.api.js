import http from '../../core/api'

export const getUsers = (currentPage, pageSize) => {
  return http.get(`users?page=${currentPage}&count=${pageSize}`)
             .then(response => {
               return response.data;
             })
};

export const followUsers = (id) => {
  return http.post(`follow/` + id)
             .then(response => {
               return response.data;
             })
};

export const unFollowUsers = (id) => {
  return http.delete(`follow/` + id)
    .then(response => {
      return response.data
    })
};