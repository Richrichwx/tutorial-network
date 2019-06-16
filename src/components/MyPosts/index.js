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
        <Post post='Хорошая погода' like='0'/>
        <Post post='Плохая погода' like='23'/>
      </div>
    )
  }
}

export default MyPosts;