const dialogsReducer = (state,action) => {

  switch (action.type) {
    case 'ADD_MESSAGE':
      let newMessage = {
        id: 3,
        text: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case 'UPDATE_NEW_MESSAGE_TEXT':
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return { type: 'ADD_MESSAGE'}
};

export const updateNewMessageActionCreator = (text) => {
  return { type: 'UPDATE_NEW_MESSAGE_TEXT', newMessage: text }
};

export default dialogsReducer;