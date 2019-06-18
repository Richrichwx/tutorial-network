import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogsData = [
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
];

const messageData = [
  {
    id: 1,
    text: 'Привет'
  },
  {
    id: 2,
    text: 'Как ты?'
  }
];

let postsData = [
  {
    text: 'Хорошая погода',
    like: '0'
  },
  {
    text: 'Плохая погода',
    like: '23'
  },
];

ReactDOM.render(<App message={messageData} posts={postsData} itemName={dialogsData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
