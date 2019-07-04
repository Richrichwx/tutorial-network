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
const A = styled.div`
`;


class MyPosts extends React.Component {
  state = {
    value: ''
  };

  addPosts = (e) => {
    this.props.addPost(this.state.value);
    console.log(this.props.post)

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
          <Textarea value={ this.state.value } onChange={ this.a }/>
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
