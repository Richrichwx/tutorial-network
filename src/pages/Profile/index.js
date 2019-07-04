import React from 'react';
import styled from 'styled-components'
import MyPosts from '../../components/MyPosts/index';
import ProfileInfo from '../../components/ProfileInfo/index';

const ProfileContainer = styled.div`
 width: 800px;
 background: #c2a7a1;
`;


const ProfileContent = styled.div`
`;
const ProfileContentTop = styled.div`
    display: flex;
       text-align: center;
`;

const ProfileContentBottom = styled.div`
`;

const Profile = (props) => {

  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileContentTop>
          <ProfileInfo/>
        </ProfileContentTop>
        <ProfileContentBottom>
          <MyPosts posts={ props.state.posts }
                   dispatch={props.dispatch}
                   newPostText={ props.state.newPostText} />
        </ProfileContentBottom>
      </ProfileContent>
    </ProfileContainer>
  )
};

export default Profile;