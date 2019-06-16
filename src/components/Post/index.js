import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.jpeg';

const Posts = styled.div`
`;

const ImagePost = styled.img`
  width: 50px;
  height: 50px;
`;

const Post = props => {
    return (
      <div>
        <Posts>
          <ImagePost src={avatar}/>
         {props.post},
          <br/>
          {props.like}
        </Posts>
      </div>
    )
};

export default Post;