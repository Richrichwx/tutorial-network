import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux';
import { logOutThunk, setAuthDataThunk } from '../../store/auth/auth.action';
import { compose } from 'redux';

const HeaderContainer = styled.div`
  width: 1000px;
  height: 65px;
  background: #7b8988;
  margin: 0 auto;
`;

class Header extends React.Component {


  logOutButton = () => {
    this.props.logOutThunk()
  };
   render() {
    return (
      <HeaderContainer>
        {this.props.isAuth ?
          <div>
            {this.props.login}
            <button onClick={this.logOutButton}>Logout</button>
          </div>
          :
          <a href="/login" >
            Login
          </a>
        }
      </HeaderContainer>
    )
  }
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});

const mapDispatchToProps = {
  setAuthDataThunk,
  logOutThunk
};

export default compose( connect(mapStateToProps, mapDispatchToProps)
)(Header);