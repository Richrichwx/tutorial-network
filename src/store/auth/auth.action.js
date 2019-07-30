export const setAuthData = (id,email,login) => ({
  type: 'SET_AUTH_DATA',
  data : {
    id,
    email,
    login
  },
});