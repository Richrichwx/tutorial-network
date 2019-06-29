const profileReducer = (state,action) => {
  if (action.type === 'ADD_POST') {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newPostText,
      like: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscribe(this._state);
  } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
    this._state.profilePage.newPostText = action.newText;
    this._callSubscribe(this._state);
  }
  return state;
};