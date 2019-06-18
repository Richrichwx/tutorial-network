import React from 'react';
import styled from 'styled-components'
import image from '../../assets/image.jpeg';

import MyPosts from '../../components/MyPosts/index';
import ProfileInfo from '../../components/ProfileInfo/index';

const ProfileContainer = styled.div`
 width: 800px;
 background: #c2a7a1;
`;

const Img = styled.img`
 width: 800px;
 height: 120px;
`;

const ProfileContent = styled.div`
`;
const ProfileContentTop = styled.div`
    display: flex;
`;

const ProfileContentBottom = styled.div`
`;

class Profile extends React.Component {
  render(posts) {
    return (
      <ProfileContainer>
        <Img src={image}/>
        <ProfileContent>
          <ProfileContentTop>
            <ProfileInfo />
          </ProfileContentTop>
          <ProfileContentBottom>
            <MyPosts posts={posts}/>
          </ProfileContentBottom>
        </ProfileContent>
      </ProfileContainer>
    )
  }
}

export default Profile;