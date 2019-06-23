import React from 'react';
import styled from 'styled-components';
import Post from '../Post/index';

const AddPostS = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;


const MyPosts = (props) => {
  let textInput = React.createRef();
  const addPosts = () => {
    debugger
    let text = textInput.current.value;
    props.addPost(text)
    textInput.current.value=''
  };
    return (
      <div>
        My post
        <AddPostS>
          <Textarea ref={textInput}/>
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