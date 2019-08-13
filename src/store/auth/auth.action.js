import { getAuth, login, LogOut } from './auth.api';
import { stopSubmit } from 'redux-form'

export const setAuthData = (id, email, login,isAuth) => ({
  type: 'SET_AUTH_DATA',
  data: {
    id,
    email,
    login,
    isAuth
  },
});

export const setAuthDataThunk = () => {
  return (dispatch) => {
    return getAuth()
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;
          dispatch(setAuthData(id, email, login, true))
        }
      })
  }
};

export const loginThunk = (email, password, rememberMe) => {
  return (dispatch) => {
    login( email, password,rememberMe )
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(setAuthDataThunk())
        } else {
          let messages = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
          dispatch(stopSubmit("login", {
            _error: messages
          }))
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

