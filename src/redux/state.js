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
  getState() {
    return this._state
  },
  addPost() {
    let newPost = {
      id: 5,
      text: this._state.profilePage.newPostText,
      like: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText =  '';
    this._callSubscribe( this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscribe(this._state);
    console.log(newText)
  },
  subscribe(observer) {
    this._callSubscribe = observer;
  },
  _callSubscribe () {
    console.log('state')
  }
};

export default store;