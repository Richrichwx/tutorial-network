import React from 'react';
import styled from 'styled-components'
import image from '../../assets/image.jpeg';
import avatar from '../../assets/avatar.jpeg';
import MyPosts from '../../components/MyPosts/index'

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

const Avatar = styled.img`
  width: 150px;
  height: 150px;
`;

const ProfileInfo = styled.div`
  width: 160px;
  margin: 0 10px 0 10px;
`;

const Title = styled.h3`
  margin: 0;
`;

const ProfileContentTop = styled.div`
  display: flex;
  margin: 10px;
`;

const TextInfo = styled.p`
`;

const ProfileContentBottom = styled.div`
`;

class Profile extends React.Component {
  render() {
    return (
      <ProfileContainer>
        <Img src={image}/>
        <ProfileContent>
          <ProfileContentTop>
            <Avatar src={avatar}></Avatar>
            <ProfileInfo>
              <Title>Анна Гусева</Title>
              <TextInfo>Понятие «содержание высказывания» связано
                с категорией информативности речи и присуще только тексту.
              </TextInfo>
            </ProfileInfo>
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