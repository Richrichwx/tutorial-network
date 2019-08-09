import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addPost } from '../../store/post/post.action';
import { compose } from 'redux';
import { PostsReduxForm } from '../PostsForm';

const PostsContainer = styled.div`
  width: 800px;
`;

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

  addNewPost = (formData) => {
    console.log(formData.post)
    this.props.addPost(formData.post)
  };
  render() {
    const { post } = this.props;
    return (
      <PostsContainer>
          My post
          <AddPostS>
            <PostsReduxForm onSubmit={this.addNewPost }/>
          </AddPostS>
          <div>
            {post.post.map((item,index) => {
              return(
                <A key={index}>
                  {item}
                </A>
              )
            })}
          </div>
      </PostsContainer>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = {
  addPost
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);