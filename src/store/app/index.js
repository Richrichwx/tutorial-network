const initialState = {
  initialization: false
};

export default function (state = initialState,action) {
  switch (action.type) {
    case 'SET_INITIALIZATION': {
      return {
        ...state,
        initialization: true
      };
    }
    default:
      return state;
  }

};