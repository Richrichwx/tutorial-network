import React from 'react';
import styled from 'styled-components';
import Post from '../Post/index';

const AddPost = styled.div`
`;

const Textarea = styled.textarea`
`;

const Add = styled.button`
`;

 let postSData = [
   {
     text: 'Хорошая погода',
     like: '0'
   },
   {
     text: 'Плохая погода',
     like: '23'
   },
 ];


class MyPosts extends React.Component {
  render() {
    return (
      <div>
          My post
          <AddPost>
            <Textarea/>
            <Add>Add</Add>
          </AddPost>
        { postSData.map((el,id) => {
          return (
            <div key={id}>
              <Post post={el.text} like={el.like}/>
            </div>
            )
        })}
      </div>
    )
  }
}

export default MyPosts;