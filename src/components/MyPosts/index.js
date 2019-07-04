import React from 'react';
import styled from 'styled-components';
import Post from '../Post/index';
import { addPostActionCreator, updateNewPostActionCreator } from '../../redux/profileReducer';
import { addPost } from '../../store/profile/profile.action';

import { connect } from 'react-redux';
import { saveTaskToLocal } from '../../store/profile/utilits';

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
   rando = (min, max) => {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }
  addPosts = (e) => {
    this.props.addPost(this.state.value);
    saveTaskToLocal({
      title: this.state.value,

    })
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
          {this.props.post.post.map((item,id) => {

          })}
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
