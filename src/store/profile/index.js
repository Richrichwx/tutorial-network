const initialState = {
  profile: {}
};

export default function (state = initialState,action) {
  console.log(action.profile)
  switch (action.type) {
    case 'SET_USER_PROFILE': {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};