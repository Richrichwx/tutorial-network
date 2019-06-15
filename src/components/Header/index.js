import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 1000px;
  height: 65px;
  background: #7b8988;
  margin: 0 auto;
`;

class Header extends React.Component {
  render() {
    return (
      <HeaderContainer/>
    )
  }
}

export default Header;