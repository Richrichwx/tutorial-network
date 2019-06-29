const profileReducer = (state,action) => {
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

export default profileReducer;