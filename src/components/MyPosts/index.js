import React from 'react';
import styled from 'styled-components';
import Post from '../Post/index';

const AddPost = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;


const MyPosts = (props) => {
  let textInput = React.createRef();
  const addPosts = () => {
    let text = textInput.current.value;
        alert(text)
  };
    return (
      <div>
        My post
        <AddPost>
          <Textarea ref={textInput}/>
          <Add onClick={addPosts}>Add</Add>
        </AddPost>
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