import http from '../../core/api';

export const getProfile = (id) => {
  return  http.get(`profile/` + id)
               .then(response => {
                 return response.data
               })
};
