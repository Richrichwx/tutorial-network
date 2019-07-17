const initialState = {
  message: []
};

export default function (state = initialState,action) {
  switch (action.type) {
    case 'ADD_POST': {
      return {
        ...state,
        message: [...state.message, action.message],
      };
    }
    default:
      return state;
    }

};