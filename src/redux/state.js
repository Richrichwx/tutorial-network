import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let state = {

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

export default state;