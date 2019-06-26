import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntreTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={ state } addPost={ store.addPost.bind(store) } updateNewPostText={store.updateNewPostText.bind(store)}/>
    </BrowserRouter>, document.getElementById('root'));
};
rerenderEntreTree(store.getState());
store.subscribe(rerenderEntreTree);

