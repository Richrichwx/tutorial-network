import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthThunk, required } from '../../utilits/Validation';
import { Input } from '../FormControls';

const maxLength = maxLengthThunk(30);

const LoginForm = (props) => {
  return (
    <div>
      <form onSubmit={ props.handleSubmit }>
        <div>
          <Field name="email" placeholder="Login" component={Input}
                 validate={ [required, maxLength] }/>
        </div>
        <div>
          <Field name="password" placeholder="Password" component={Input}
                 type="password"
                 validate={[required, maxLength]}/>
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