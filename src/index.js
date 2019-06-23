import React from 'react';
import { rerenderEntreTree } from './render';
// import ReactDOM from 'react-dom';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import state from './redux/state';
// import { addPost } from './redux/state';
// import { BrowserRouter } from 'react-router-dom';
 import state from './redux/state';

rerenderEntreTree(state);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

