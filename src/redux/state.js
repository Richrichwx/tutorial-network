import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {

  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          text: 'Хорошая погода',
          like: '0'
        },
        {
          id: 2,
          text: 'Плохая погода',
          like: '23'
        },
      ],
      newPostText: ''
    },
    dialogsPage: {
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
    }
  },
  _callSubscribe() {
    console.log('state')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer();
    this._callSubscribe(this._state);
  }
};

export const addPostActionCreator = () => {
  return { type: 'ADD_POST'}
};

export const updateNewPostActionCreator = (text) => {
  return { type: 'UPDATE_NEW_POST_TEXT', newText: text }
};

export const addMessageActionCreator = () => {
  return { type: 'ADD_MESSAGE'}
};

export const updateNewMessageActionCreator = (text) => {
  return { type: 'UPDATE_NEW_MESSAGE_TEXT', newMessage: text }
};


export default store;