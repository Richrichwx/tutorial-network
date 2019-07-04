
const initialState = {
  post:[]
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST': {
      return {
        ...state,
        post: [...state.post, action.post],
      };
    }
    default:
      return state;
  }
}
