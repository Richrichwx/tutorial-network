import { setAuthData, setAuthDataThunk } from '../auth/auth.action';

export const setInitialization = () => ({
  type: 'SET_INITIALIZATION',
});

export const setInitializationthunk = () => {
  return (dispatch) => {
    let promise = dispatch(setAuthDataThunk());
    promise.then(() => {
      dispatch(setInitialization())
    })
  }
};