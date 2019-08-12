import React from 'react';
import './App.css';
import Header from './components/Header/index';
import SideBar from './components/Sidebar/index';
import RouterWrapper from './containers/RouterWrapper';
import { setAuthDataThunk } from './store/auth/auth.action';
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.setAuthDataThunk()
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-container">
          <SideBar/>
          <RouterWrapper/>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = {
  setAuthDataThunk,
};

export default connect(null,mapDispatchToProps)(App);