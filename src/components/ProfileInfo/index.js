import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.jpeg';

const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

const ProfileContainer = styled.div`
 display: flex;
  margin: 0 auto;
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
  render() {
    return (
      <ProfileContainer>
        <Avatar src={avatar}></Avatar>
        <ProfileInfoCont>
          <Title>Анна Гусева</Title>
          <TextInfo>Понятие «содержание высказывания» связано
            с категорией информативности речи и присуще только тексту.
          </TextInfo>
        </ProfileInfoCont>
      </ProfileContainer>
    )
  }
}

export default ProfileInfo;