import React from 'react';
import styled from 'styled-components';
import { LoginReduxForm } from '../../components/LoginForm';
import { connect } from 'react-redux';
import { loginThunk } from '../../store/auth/auth.action';
import { Redirect } from 'react-router';

const MusicContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;


const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
    props.loginThunk(formData.email,formData.password,formData.rememberMe);
    console.log(props.isAuth)
  };
  if(props.isAuth) {
    return (
      <Redirect to={"/profile"}/>
    )
  }
    return (
      <MusicContainer>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </MusicContainer>
    )
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,{loginThunk})(Login);
