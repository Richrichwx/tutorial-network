import React from 'react';
import './App.css';
import Header from './components/Header/index';
import SideBar from './components/Sidebar/index';
import Profile from './pages/Profile/index';
import Dialogs from './pages/Dialogs/index'
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <div className="App-container">
        <SideBar />
        <Route component={Dialogs} path='/dialogs' />
        <Route component={Profile} path='/profile'/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
