import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  height: 500px;
  background: #f7e3fd;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  padding-bottom: 10px;
`;

const A = styled.a`
  font-size: 18px;
`;

const ContainerA = styled.div`
  cursor: pointer;
`;

class Sidebar extends React.Component {
  render() {
    return (
      <SidebarContainer>
        <ContainerA>
          <a href="/profile">Профиль</a>
        </ContainerA>
        <ContainerA>
          <a href="/dialogs">Сообщении</a>
        </ContainerA>
        <ContainerA>
          <A>News</A>
        </ContainerA>
        <ContainerA>
          <A>Music</A>
        </ContainerA>
        <ContainerA>
          <A>Setting</A>
        </ContainerA>
      </SidebarContainer>
    )
  }
}

export default Sidebar;