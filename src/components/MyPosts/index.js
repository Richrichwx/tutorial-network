import React from 'react';
import styled from 'styled-components';
import Post from '../Post/index';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profileReducer';
import { addPost } from '../../store/profile/profile.action';
import { connect } from 'react-redux';

const AddPostS = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;


class MyPosts extends React.Component {
  state = {
    value: ''
  }
  addPosts = (e) => {

    console.log(this.props.post)

     let a =this.state.value
    this.props.addPost(a)
  };
  a = (e) => {
    this.setState({
      value: e.target.value
    });
  };
  render() {
    return (
      <div>
        My post
        <AddPostS>
          <Textarea  value={this.state.value} onChange={this.a}/>
          <Add onClick={this.addPosts}>Add</Add>
        </AddPostS>
        <div>
          {this.props.post.post}
        </div>
      </div>
    )
  }

};
const mapStateToProps = state => ({
    post: state.profile
});

const mapDispatchToProps = {
  addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts)
