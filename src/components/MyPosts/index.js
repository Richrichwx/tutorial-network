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
  render() {
    return (
      <div>
          My post
          <AddPost>
            <Textarea/>
            <Add>Add</Add>
          </AddPost>
        <Post/>
      </div>
    )
  }
}

export default MyPosts;