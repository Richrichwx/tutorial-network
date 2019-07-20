import React from 'react';
import styled from 'styled-components';

const UsersContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  height: 460px;
  padding: 20px 0;
`;

class Users extends React.Component {
  render() {
    return (
      <UsersContainer>Пользователи</UsersContainer>
    )
  }
}

export default Users;