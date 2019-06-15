import React from 'react';
import './App.css';
import Header from './components/Header/index';
import Sidebar from './components/Sidebar/index';
import Profile from './components/Profile/index'


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Profile/>
    </div>
  );
}

export default App;
