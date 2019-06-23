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
    ]
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

 export let addPost = postMessage => {
   debugger
  let newPost = {
    id: 5,
    message: postMessage,
    like: 0
  };
  state.profilePage.posts.push(newPost)
   console.log( state.profilePage.posts)
};

export default state;