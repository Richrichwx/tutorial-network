import React from 'react';
import { reduxForm,Field } from 'redux-form';

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field name="posts" placeholder="введите пост" component="input"/>
      <button>Add</button>
    </form>
  )
};


export const PostsReduxForm = reduxForm({
  form: 'posts'
})(PostsForm);