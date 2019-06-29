const dialogsReducer = (state,action) => {
  if (action.type === 'ADD_MESSAGE') {
    let newMessage = {
      id: 3,
      text: state.newMessageText,
    };
    state.messages.push(newMessage);
    state.newMessageText = '';
  } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
    state.newMessageText = action.newMessage;
  }
  return state;
};

export default dialogsReducer;