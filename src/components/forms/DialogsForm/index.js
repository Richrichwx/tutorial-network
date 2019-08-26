import React from 'react';

import { Field, reduxForm } from 'redux-form';

const DialogsForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
          <Field name="message" placeholder="ввеедите сообщениие" component="textarea" />
          <button>add message</button>
        </form>
    </div>
  )
};

export const DialogsReduxForm =  reduxForm({
  // a unique name for the form
  form: 'message'
})(DialogsForm);