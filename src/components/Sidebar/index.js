import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

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
          <NavLink to="/profile">Профиль</NavLink>
        </ContainerA>
        <ContainerA>
          <NavLink to="/dialogs">Сообщения</NavLink>
        </ContainerA>
        <ContainerA>
          <NavLink to="/news">Новости</NavLink>
        </ContainerA>
        <ContainerA>
          <NavLink to="/music">Музыка</NavLink>
        </ContainerA>
        <ContainerA>
          <NavLink to="/setting">Настройки</NavLink>
        </ContainerA>
      </SidebarContainer>
    )
  }
}

export default Sidebar;