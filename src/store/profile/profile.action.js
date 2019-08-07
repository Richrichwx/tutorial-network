
import { getProfile, getStatus, updateStatus } from './profile.api';

export const setUserProfile = (profile) => ({
  type: 'SET_USER_PROFILE',
  profile
});

export const setStatus = (status) => ({
  type: 'SET_STATUS',
  status
});

export const setUserProfileThunk = (id) => {
  return (dispatch) => {
    getProfile(id)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
};

export const setStatusThunk = (id) => {
  return (dispatch) => {
    getStatus(id)
      .then(response => {
        dispatch(setStatus(response.data))
      })
  }
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    updateStatus(status)
      .then(response => {
        if(response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
  }
};


