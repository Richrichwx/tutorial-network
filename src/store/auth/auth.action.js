import { stopSubmit } from 'redux-form'
import api from './auth.api';

export const setAuthData = (id, email, login, isAuth) => ({
  type: 'SET_AUTH_DATA',
  data: {
    id,
    email,
    login,
    isAuth
  },
});

export const setAuthDataThunk = () => async (dispatch) => {
  const { data } = await api.getAuth();
  if (data.resultCode === 0) {
    let { id, email, login } = data.data;
    dispatch(setAuthData(id, email, login, true))
  }
};

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  const { data } = await  api.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(setAuthDataThunk())
  } else {
    let messages = data.messages.length > 0 ? data.messages[0] : 'some error';
    dispatch(stopSubmit('login', {
      _error: messages
    }))
  }
};

export const logOutThunk = () => async (dispatch) => {
  const { data } = await  api.LogOut();
  if (data.resultCode === 0) {
    dispatch(setAuthData(null, null, null, false))
  }
};

