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

  _addPost() {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newPostText,
      like: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscribe(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscribe(this._state);
    console.log(newText)
  },
  _addMessage() {
    let newMessage = {
      id: 3,
      text: this._state.dialogsPage.newMessageText,
    };
    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscribe(this._state);
  },

  _updateNewMessageText(newMessage) {
    this._state.dialogsPage.newMessageText = newMessage;
    this._callSubscribe(this._state);
  },
  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    sidebarReducer();

    if (action.type === 'ADD_POST') {
      this._addPost();
    } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
      this._updateNewPostText(action.newText)
    } else if (action.type === 'ADD_MESSAGE') {
      this._addMessage();
    } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
      this._updateNewMessageText(action.newMessage)
    }
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