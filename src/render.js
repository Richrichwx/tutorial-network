import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, updateNewPostText} from './redux/state';

import { BrowserRouter } from 'react-router-dom';

export let rerenderEntreTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={ state } addPost={ addPost } updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));
};