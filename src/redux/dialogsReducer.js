const initialState = {
  dialogs: [
    {
      id: 1,
      name: 'Дмитрий'
    },
    {
      id: 2,
      name: 'Мария'
    }, {
      id: 3,
      name: 'Анна'
    },
    {
      id: 4,
      name: 'Александр'
    }, {
      id: 5,
      name: 'Максим'
    },
  ],
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
  newMessageText: ''
};

const dialogsReducer = (state = initialState,action) => {

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