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
    return (
      <div>
        My post
        <AddPost>
          <Textarea/>
          <Add>Add</Add>
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