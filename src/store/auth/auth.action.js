export const setAutData = (userId,email,login) => ({
  type: 'SET_AUTH_DATA',
  data : {
    userId,
    email,
    login
  },
});