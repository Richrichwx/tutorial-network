import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setUserProfile } from '../../store/profile/profile.action';
import avatar from '../../assets/image.jpeg';
import { getProfile } from '../../store/profile/profile.api';

const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

const ProfileContainer = styled.div`
 display: flex;
  margin: 0 auto;
    width: 300px;
  display: flex;
  text-align: center;
  justify-content: space-between;
`;

const ProfileInfoCont = styled.div`
  width: 160px;
 
`;

const Title = styled.h3`
  margin: 0;
`;

const TextInfo = styled.p`
`;

class ProfileInfo extends React.Component {

  componentDidMount() {
        let id = this.props.match;
        if(!id) {
          id = 2;
        }
        getProfile(id)
               .then(data => {
                 this.props.setUserProfile(data)
               })
  }

  render() {

    return (
      <ProfileContainer>
        { this.props.profile.profile.photos ? (
          <Avatar src={ this.props.profile.profile.photos.large }/>
        ) : (
          <Avatar src={ avatar }/>
        ) }

        <ProfileInfoCont>
          <Title>{ this.props.profile.profile.fullName }</Title>
          <TextInfo>
            { this.props.profile.profile.lookingForAJobDescription }</TextInfo>
        </ProfileInfoCont>
      </ProfileContainer>

    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile
});

const mapDispatchToProps = {
  setUserProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

