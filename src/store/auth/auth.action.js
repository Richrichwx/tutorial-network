import { getAuth } from './auth.api';

export const setAuthData = (id, email, login) => ({
  type: 'SET_AUTH_DATA',
  data: {
    id,
    email,
    login
  },
});

export const setAuthDataThunk = (id, email, login) => {
  return (dispatch) => {
    getAuth(id, email, login)
      .then(data => {
        if (data.resultCode === 0) {
          let { id, email, login } = data.data;
          dispatch(setAuthData(id, email, login))
        }
      })
  }
};
