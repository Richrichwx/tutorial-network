import React from 'react';
import styled from 'styled-components';
import Post from '../Post/index';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profileReducer';

const AddPostS = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;


const MyPosts = (props) => {
  let addPosts = () => {
    // props.addPost(text);
    props.dispatch(addPostActionCreator());
  };

  let onChangePost = (e)  => {
    let text = e.target.value;
    //
    props.dispatch(updateNewPostActionCreator(text));
  };
    return (
      <div>
        My post
        <AddPostS>
          <Textarea onChange={onChangePost} value={props.newPostText}/>
          <Add onClick={addPosts}>Add</Add>
        </AddPostS>
        <div>
          {props.posts.map((p,id) => {
            return  (
              <div key={id}>
                <Post text={p.text} like={p.like}/>
              </div>
              )
          })}
        </div>
      </div>
    )
};

export default MyPosts;