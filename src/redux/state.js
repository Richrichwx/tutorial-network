let rerenderEntreTree = ()  => {
  console.log('state')
};

let state = {
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
};
window.state =  state;

 export const addPost = () => {
  let newPost = {
    id: 5,
    text: state.profilePage.newPostText,
    like: 0
  };
  state.profilePage.posts.push(newPost);
   state.profilePage.newPostText =  '';
   rerenderEntreTree(state);
};

export const updateNewPostText = newText => {
  state.profilePage.newPostText = newText;
  rerenderEntreTree(state);
  console.log(newText)
};

export const subscribe = (observer) => {
  rerenderEntreTree = observer;
};

export default state;