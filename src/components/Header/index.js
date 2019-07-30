import React from 'react';
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios/index';

const HeaderContainer = styled.div`
  width: 1000px;
  height: 65px;
  background: #7b8988;
  margin: 0 auto;
`;

class Header extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
         .then(response => {

         })
  }

  navigateTo = (e, path) => {
    e.preventDefault();
    window.navigate.push(`/${path}`)
  };
  render() {
    return (
      <HeaderContainer>
        <a href="/login" onClick={(e) => this.navigateTo(e, `login`)}>
          Login
        </a>
      </HeaderContainer>
    )
  }
}

export default Header;