import React from 'react';

import { Field, reduxForm } from 'redux-form';
import { maxLenghtThunk, required } from '../../utilits/Validation';

const maxLenght = maxLenghtThunk(10);

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={ props.handleSubmit }>
        <div>
          <Field name="login" placeholder="Login" component="input"
                 validate={ [required, maxLenght] }/>
        </div>
        <div>
          <Field name="password" placeholder="Password" component="input"
                 validate={[required, maxLenght]}/>
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

export const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm);