import React from 'react';
import styled from 'styled-components'
import ProfileInfo from '../../components/ProfileInfo/index';
import { connect } from 'react-redux';
import { addPost } from '../../store/profile/profile.action';

const AddPostS = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;

const A = styled.div`
`;


const ProfileContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  height: 460px;
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
  state = {
    value: ''
  };

  onChangePost = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  addPosts = (e) => {
    this.props.addPost(this.state.value);
    console.log(this.props.post);
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <ProfileContainer>
        <ProfileContent>
          <ProfileContentTop>
            <ProfileInfo/>
          </ProfileContentTop>
          <ProfileContentBottom>
            <div>
              My post
              <AddPostS>
                <Textarea value={ this.state.value } onChange={ this.onChangePost }/>
                <Add onClick={ this.addPosts }>Add</Add>
              </AddPostS>
              <div>
                { this.props.post.post.map((item,index) => {
                  return(
                    <A key={index}>
                      {item}
                    </A>
                  )
                })}
              </div>
            </div>
          </ProfileContentBottom>
        </ProfileContent>
      </ProfileContainer>
    )
  }
}

const mapStateToProps = state => ({
  post: state.profile
});

const mapDispatchToProps = {
  addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

