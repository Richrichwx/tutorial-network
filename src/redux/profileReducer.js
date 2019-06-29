const profileReducer = (state,action) => {
  if (action.type === 'ADD_POST') {
    let newPost = {
      id: 5,
      text: state.newPostText,
      like: 0
    };
    state.posts.push(newPost);
    state.newPostText = '';
  } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
    state.newPostText = action.newText;
  }
  return state;
};