import api from './profile.api';

export const setUserProfile = (profile) => ({
  type: 'SET_USER_PROFILE',
  profile
});

export const setStatus = (status) => ({
  type: 'SET_STATUS',
  status
});

export const setUserProfileThunk = (id) => async (dispatch) => {
  const { data } = await api.getProfile(id);
  dispatch(setUserProfile(data))
};

export const getStatusThunk = (id) => (dispatch) => {
  api.getStatus(id)
     .then(response => {
       dispatch(setStatus(response.data))
     })
};

export const updateStatusThunk = (status) => (dispatch) => {
  api.updateStatus(status)
     .then(response => {
       if (response.data.resultCode === 0) {
         dispatch(setStatus(status))
       }
     })
};

