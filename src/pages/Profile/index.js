import React from 'react';
import styled from 'styled-components'
import ProfileInfo from '../../components/ProfileInfo/index';
import MyPosts from '../../components/MyPosts/index';
import { connect } from 'react-redux';

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
    return (
      <ProfileContainer>
        <ProfileContent>
          <ProfileContentTop>
            <ProfileInfo/>
          </ProfileContentTop>
          <ProfileContentBottom>
            <MyPosts/>
          </ProfileContentBottom>
        </ProfileContent>
      </ProfileContainer>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

