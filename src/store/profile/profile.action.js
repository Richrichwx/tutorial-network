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

export const getStatusThunk = (id) => async (dispatch) => {
  const { data } = await api.getStatus(id);
  dispatch(setStatus(data.data))
};

export const updateStatusThunk = (status) => async (dispatch) => {
  const { data: { data } } = await api.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status))
  }
};

