import React from 'react';
import { reduxForm,Field } from 'redux-form';

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="post" placeholder="введите пост" component="textarea"/>
      <button>Add</button>
    </form>
  )
};


export const PostsReduxForm = reduxForm({
  form: 'post'
})(PostsForm);