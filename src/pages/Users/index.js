import React from 'react';
import styled from 'styled-components';

const UsersContainer = styled.div`
  width: 800px;
`;

class Users extends React.Component {
  render() {
    return (
      <UsersContainer>Музыка</UsersContainer>
    )
  }
}

export default Users;