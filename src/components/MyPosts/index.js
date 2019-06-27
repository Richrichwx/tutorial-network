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
  let addPosts = () => {
    let text = textInput.current.value;
    // props.addPost(text);
    props.dispatch({ type: 'ADD_POST'});
  };

  let onChangePost = ()  => {
    let text = textInput.current.value;
    //
    props.dispatch({type: 'UPDATE_NEW_POST_TEXT', newText: text});
  };
    return (
      <div>
        My post
        <AddPostS>
          <Textarea onChange={onChangePost} ref={textInput} value={props.newPostText}/>
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