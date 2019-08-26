import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addPost } from '../../store/post/post.action';
import { compose } from 'redux';
import { PostsReduxForm } from '../forms/PostsForm';

const PostsContainer = styled.div`
  width: 800px;
`;

const AddPostS = styled.div`
`;

const A = styled.div`
`;
const users = [1,2,3,4,5];
const  user = 0;
const counts = 100;
class MyPosts extends React.Component {
  state = {
    value: '',
    isLike: false,
    count: counts
  };

  componentDidMount() {
    let a = users.find((value) => value === user);
    this.setState({
      isLike: a ? true : false,
    })
  }
  likeButton = () => {
      this.setState({
        isLike: !this.state.isLike,
        count: this.state.isLike? counts  : counts + 1
      });
    console.log(this.state.count)
  };

  addNewPost = (formData) => {
    this.props.addPost(formData.post)
  };
  render() {
    console.log(this.state.isLike)
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
        <>
          {this.state.isLike ? (
            <button onClick={this.likeButton}> Unlike
            </button>
          ) : (
            <button onClick={this.likeButton}> Like
            </button>
          )}
          <div>{this.state.count}</div>
        </>
      </PostsContainer>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post,
  userId: state.auth.id
});

const mapDispatchToProps = {
  addPost
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(MyPosts);