const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH_DATA': {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
}