import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addPost } from '../../store/post/post.action';
import { compose } from 'redux';

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
    const { post } = this.props;
    return (
      <PostsContainer>
          My post
          <AddPostS>
            <Textarea value={ this.state.value } onChange={ this.onChangePost }/>
            <Add onClick={ this.addPosts }>Add</Add>
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