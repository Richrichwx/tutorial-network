import React from 'react';
import './App.css';
import Header from './components/Header/index';
import SideBar from './components/Sidebar/index';
import Profile from './pages/Profile/index';
import Dialogs from './pages/Dialogs/index';
import News from './pages/News/index';
import Music from './pages/Music/index';
import Setting from './pages/Setting/index';


import { Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
        <SideBar />
        <Switch>
          <Route render={ () => <Profile state={props.state.profilePage}
                                         dispatch={props.dispatch} />} path='/profile' />
          <Route render={ () => <Dialogs state={props.state.dialogsPage}  dispatch={props.dispatch}/>} path='/dialogs' />
          <Route component={News} path='/news' />
          <Route component={Music} path='/music' />
          <Route component={Setting} path='/setting' />
        </Switch>
      </div>
    </div>
  );
}

export default App;