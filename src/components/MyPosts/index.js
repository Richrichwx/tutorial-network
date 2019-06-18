import React from 'react';
import styled from 'styled-components';
import Post from '../Post/index';

const AddPost = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;

class MyPosts extends React.Component {
  render(posts) {
    return (
      <div>
          My post
          <AddPost>
            <Textarea/>
            <Add>Add</Add>
          </AddPost>
        <>
        { posts.map((el,id) => {
          return (
            <div key={id}>
              <Post post={el.text} like={el.like}/>
            </div>
            )
        })}
        </>
      </div>
    )
  }
}

export default MyPosts;