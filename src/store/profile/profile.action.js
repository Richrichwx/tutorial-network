
import { getProfile } from './profile.api';

export const setUserProfile = (profile) => ({
  type: 'SET_USER_PROFILE',
  profile
});

export const setUserProfileThunk = (id) => {
  return (dispatch) => {
    getProfile(id)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
};


