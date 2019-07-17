import React from 'react';
import styled from 'styled-components';

const AddPostS = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;


const MyPosts = (props) => {
  let addPosts = () => {
  };

  let onChangePost = (e)  => {
  };
  return (
    <div>
      My post
      <AddPostS>
        <Textarea onChange={onChangePost} value={props.newPostText}/>
        <Add onClick={addPosts}>Add</Add>
      </AddPostS>
      <div>
      </div>
    </div>
  )
};

export default MyPosts;
