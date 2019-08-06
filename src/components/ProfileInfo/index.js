import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setUserProfileThunk } from '../../store/profile/profile.action';
import avatar from '../../assets/image.jpeg';
import { Redirect } from 'react-router';
import { WithAuthRedirect } from '../../noc/AuthRedirectWrapper';

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
    this.props.setUserProfileThunk(id)
  }

  render() {
    const {isAuth} = this.props;

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
let AuthRedirectComponent = WithAuthRedirect(ProfileInfo);
const mapStateToProps = state => ({
  profile: state.profile,
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  setUserProfileThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

