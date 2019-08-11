import { getAuth, login, LogOut } from './auth.api';

export const setAuthData = (id, email, login,isAuth) => ({
  type: 'SET_AUTH_DATA',
  data: {
    id,
    email,
    login,
    isAuth
  },
});

export const setAuthDataThunk = (id, email, login) => {
  return (dispatch) => {
    getAuth(id, email, login)
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          dispatch(setAuthData(id, email, login,true))
        }
      })
  }
};

export const loginThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    login( email, password,rememberMe )
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthData())
        }
      })
  }
};

export const logOutThunk = () => {
  return (dispatch) => {
    LogOut()
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthData(null,null,null,false))
        }
      })
  }
};

