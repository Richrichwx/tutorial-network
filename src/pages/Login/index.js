import React from 'react';
import styled from 'styled-components';
import { Field, reduxForm } from 'redux-form';


const MusicContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;

const LoginForm = (props) => {
    return (
      <div>
        <form onSubmit={props.handleSubmit}>
          <div>
            <Field name="login" placeholder="Login" component="input"/>
          </div>
          <div>
            <Field name="password" placeholder="Password" component="input"/>
          </div>
          <div>
            <Field name="remember" type="checkbox" component="input"/> Remember me
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    )
};

const LoginReduxForm =  reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  };
    return (
      <MusicContainer>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </MusicContainer>
    )
};

export default Login;