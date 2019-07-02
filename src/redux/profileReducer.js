const initialState = {
  posts: [
    {
      id: 1,
      text: 'Хорошая погода',
      like: '0'
    },
    {
      id: 2,
      text: 'Плохая погода',
      like: '23'
    },
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case 'ADD_POST':
      let newPost = {
        id: 5,
        text: state.newPostText,
        like: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case 'UPDATE_NEW_POST_TEXT':
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: 'ADD_POST'}
};

export const updateNewPostActionCreator = (text) => {
  return { type: 'UPDATE_NEW_POST_TEXT', newText: text }
};

export default profileReducer;