import React from 'react';
import './App.css';
import Header from './components/Header/index';
import SideBar from './components/Sidebar/index';
import RouterWrapper from './containers/RouterWrapper';
import { setAuthDataThunk } from './store/auth/auth.action';
import { connect } from 'react-redux';
import { setInitializationthunk } from './store/app/app.action';

class App extends React.Component {
  componentDidMount() {
    this.props.setInitializationthunk()
  }
  render() {
    if(!this.props.initialization) {
      return ( 'aaaaa')
    }
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

const mapStateToProps = state => ({
  initialization: state.app.initialization
});

const mapDispatchToProps = {
  setInitializationthunk,
};

export default connect(mapStateToProps,mapDispatchToProps)(App);