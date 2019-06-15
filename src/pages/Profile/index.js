import React from 'react';
import styled from 'styled-components'
import image from '../../assets/image.jpeg';
import avatar from '../../assets/avatar.jpeg';

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

const Posts = styled.div`
`;

const ProfileContentBottom = styled.div`
`;

const AddPost = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;

const ImagePost = styled.img`
width: 50px;
height: 50px;
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
            My post
            <AddPost>
              <Textarea/>
              <Add>Add</Add>
            </AddPost>
            <Posts>
              <ImagePost src={avatar}/>
              Post 1
            </Posts>
            <Posts>
              <ImagePost src={avatar}/>
              Post 2</Posts>
          </ProfileContentBottom>
        </ProfileContent>
      </ProfileContainer>
    )
  }
}

export default Profile;