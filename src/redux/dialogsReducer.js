const dialogsReducer = (state,action) => {
  if (action.type === 'ADD_MESSAGE') {
    this._addMessage();
  } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
    this._updateNewMessageText(action.newMessage)
  }
  return state;
};