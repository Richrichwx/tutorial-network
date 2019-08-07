import http from '../../core/api';

export const getProfile = (id) => {
  return  http.get(`profile/` + id)
};

export const getStatus = (id) => {
  return  http.get(`profile/status/` + id)
};

export const updateStatus = (status) => {
  return  http.put(`profile/status`, {
    status: status
  })
};
