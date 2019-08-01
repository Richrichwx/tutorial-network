import http from '../../core/api';

export const getAuth = () => {
  return http.get(`auth/me`)
    .then(response=> {
      return response.data
    })
};
