const initialState = {
  messages: [
    {
      id: 1,
      text: 'Привет'
    },
    {
      id: 2,
      text: 'Как ты?'
    }
  ],
};

const messages= (state = initialState,action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      let newMessage = {
        id: 3,
        text: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case 'UPDATE_NEW_MESSAGE':
      state.newMessageText = action.text;
      return state;
    default:
      return state;
  }
};


export default messages;