import React from 'react';
import styled from 'styled-components';
import { LoginReduxForm } from '../../components/LoginForm';

const MusicContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;


const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  };
    return (
      <MusicContainer>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </MusicContainer>
    )
};

export default Login;
