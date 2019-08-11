import React from 'react';
import styled from 'styled-components';
import { LoginReduxForm } from '../../components/LoginForm';
import { connect } from 'react-redux';
import { loginThunk } from '../../store/auth/auth.action';

const MusicContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;


const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
    props.loginThunk(formData.email,formData.password,formData.rememberMe)
  };
    return (
      <MusicContainer>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </MusicContainer>
    )
};

export default connect(null,{loginThunk})(Login);
