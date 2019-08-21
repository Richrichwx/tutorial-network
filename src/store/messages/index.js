const initialState = {
  message: [],
};

export default function (state = initialState,action) {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return {
        ...state,
        message: [...state.message, action.message],
      };
    }
    default:
      return state;
  }

};