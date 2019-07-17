import React from 'react';
import './App.css';
import Header from './components/Header/index';
import SideBar from './components/Sidebar/index';
import RouterWrapper from './containers/RouterWrapper';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="App-container">
        <SideBar />
        <RouterWrapper />
      </div>
    </div>
  );
}

export default App;