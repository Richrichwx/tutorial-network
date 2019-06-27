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

  dispatch(action) {
    if (action.type === 'ADD_POST') {
      this._addPost();
    } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
      this._updateNewPostText(action.newText)
    }
  }
};

export default store;