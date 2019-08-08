import React from 'react';
import styled from 'styled-components';
import LoginForm from '../../components/LoginForm';

const MusicContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;

class Login extends React.Component {
  render() {
    return (
      <MusicContainer>
        <h1>Login</h1>
        <LoginForm />
      </MusicContainer>
    )
  }
}

export default Login;