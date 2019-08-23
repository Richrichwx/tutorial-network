import api from './profile.api';

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
    api.getProfile(id)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
  }
};

export const getStatusThunk = (id) => {
  return (dispatch) => {
    api.getStatus(id)
      .then(response => {
        dispatch(setStatus(response.data))
      })
  }
};

export const updateStatusThunk = (status) => {
  return (dispatch) => {
    api.updateStatus(status)
      .then(response => {
        if(response.data.resultCode === 0) {
          dispatch(setStatus(status))
        }
      })
  }
};


