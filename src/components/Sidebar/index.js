import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

const SidebarContainer = styled.div`
  width: 200px;
  height: auto;
  background: #f7e3fd;
  margin: 0 auto;
  flex-direction: column;
  display: flex;
  padding: 20px 0;
`;

const ContainerA = styled.div`
  cursor: pointer;
`;

class Sidebar extends React.Component {
  navigateTo = (e, path) => {
    e.preventDefault();
    window.navigate.push(`/${path}`)
  };
  render() {
    return (
      <SidebarContainer>
        <ContainerA>
          <a href="/profile" onClick={(e) => this.navigateTo(e, 'profile')}>
            Профиль
          </a>
        </ContainerA>
        <ContainerA>
          <a href="/dialogs" onClick={(e) => this.navigateTo(e, 'dialogs')}>
            Диалоги
          </a>
        </ContainerA>
        <ContainerA>
          <a href="/users" onClick={(e) => this.navigateTo(e, 'users')}>
            Пользователи
          </a>
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