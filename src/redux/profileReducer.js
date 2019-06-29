const profileReducer = (state,action) => {
  if (action.type === 'ADD_POST') {
    this._addPost();
  } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
    this._updateNewPostText(action.newText)
  }
  return state;
};