const dialogsReducer = (state,action) => {
  if (action.type === 'ADD_MESSAGE') {
    let newMessage = {
      id: 3,
      text: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscribe(this._state);
  } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
    this._state.dialogsPage.newMessageText = action.newMessage;
    this._callSubscribe(this._state);
  }
  return state;
};