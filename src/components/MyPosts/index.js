import React from 'react';
import styled from 'styled-components';
import Post from '../Post/index';

const AddPost = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;


const MyPosts = (posts) => {
    return (
      <div>
        My post
        <AddPost>
          <Textarea/>
          <Add>Add</Add>
        </AddPost>
        <div>
          {posts.posts.map((p,key) => {
            return  (
              <div id={key}>
                <Post text={p.text} like={p.like}/>
              </div>
              )
          })}
        </div>
      </div>
    )
};

export default MyPosts;