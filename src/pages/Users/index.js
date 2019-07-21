import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const UsersContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  height: 460px;
  padding: 20px 0;
`;

const Users = () => {
  debugger
  return (
    <UsersContainer>Пользователи</UsersContainer>
  )
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Users);