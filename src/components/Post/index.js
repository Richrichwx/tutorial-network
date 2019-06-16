import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.jpeg';

const Posts = styled.div`
`;

const ImagePost = styled.img`
  width: 50px;
  height: 50px;
`;

class Post extends React.Component {
  render() {
    return (
      <div>
        <Posts>
          <ImagePost src={avatar}/>
          Post 1
        </Posts>
        <Posts>
          <ImagePost src={avatar}/>
          Post 2</Posts>
      </div>
    )
  }
}

export default Post;