const initialState = {
  profile: [],
  status: ''
};

export default function (state = initialState,action) {
  switch (action.type) {
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status,
      };
    }
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