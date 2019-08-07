import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setStatusThunk, setUserProfileThunk, updateStatusThunk } from '../../store/profile/profile.action';
import avatar from '../../assets/image.jpeg';
import { Redirect } from 'react-router';
import { WithAuthRedirect } from '../../noc/AuthRedirectWrapper';
import { compose } from 'redux';
import ProfileStatus from '../ProfileStatus';

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
    this.props.setUserProfileThunk(id);
      this.props.setStatusThunk(id)

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
        <ProfileStatus status={this.props.status} updateStatusThunk={this.props.updateStatusThunk}/>
      </ProfileContainer>

    )
  }
}

const mapStateToProps = state => ({
  profile: state.profile,
  isAuth: state.auth.isAuth,
  status: state.profile.status
});

const mapDispatchToProps = {
  setUserProfileThunk,
  setStatusThunk,
  updateStatusThunk
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(ProfileInfo);

