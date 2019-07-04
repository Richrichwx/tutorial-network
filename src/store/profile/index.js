
const initialState = {
  post:[]
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'ADD_POST': {
      console.log(state.post)
      return {
        ...state,
        post: [...state.post,action.post],
      };
    }
    default:
      return state;
  }
}
