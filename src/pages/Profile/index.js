import React from 'react';
import styled from 'styled-components'
import ProfileInfo from '../../components/ProfileInfo/index';
import MyPosts from '../../components/MyPosts/index';

const ProfileContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;

const ProfileContent = styled.div`
`;

const ProfileContentTop = styled.div`
  display: flex;
  text-align: center;
`;

const ProfileContentBottom = styled.div`
`;

class Profile extends React.Component {
  render() {
    console.log(this.props.match)
    return (
      <ProfileContainer>
        <ProfileContent>
          <ProfileContentTop>
            <ProfileInfo  match={this.props.match.params.id}/>
          </ProfileContentTop>
          <ProfileContentBottom>
            <MyPosts/>
          </ProfileContentBottom>
        </ProfileContent>
      </ProfileContainer>
    )
  }
}

export default Profile;

