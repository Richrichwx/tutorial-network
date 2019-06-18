import React from 'react';
import './App.css';
import Header from './components/Header/index';
import SideBar from './components/Sidebar/index';
import Profile from './pages/Profile/index';
import Dialogs from './pages/Dialogs/index';
import News from './pages/News/index';
import Music from './pages/Music/index';
import Setting from './pages/Setting/index';


import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App(dialogsItem,messageItem,postsItem) {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className="App-container">
        <SideBar />
        <Switch>
          <Route path='/dialogs' render={ () => <Dialogs dialogs={dialogsItem} message={messageItem} posts={postsItem}/>} />
          <Route component={Profile} path='/profile' />
          <Route component={News} path='/news' />
          <Route component={Music} path='/music' />
          <Route component={Setting} path='/setting' />
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
