import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/image.jpeg';
import { connect } from 'react-redux';
import { follow, setUsers, unFollow } from '../../store/users/users.action';

import * as axios from 'axios'; //we export everything there

const UsersContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;

const Img = styled.img`
  width: 100px;
  height: 50px;
`;

const asd = styled.p`
font-weight: bold;
`;

class Users extends React.Component {

componentDidMount() {
  axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    this.props.setUsers(response.data.items);
  })
}
  render() {
    const { users, pageSize, totalCountUsers, currentPage } = this.props;
    let pagesCount = totalCountUsers / pageSize;
    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <UsersContainer>
        <div>
          { pages.map((str,id )=> {
            return (
              <span key={id}>
                {currentPage === str ? (
                  <b>{str}</b>
                ) : (
                  <span>{str}</span>
                )}
                </span>
              )
          })}
        </div>
        { users.users.map((user) => {
          return (
            <div key={ user.id }>
              <span>
                <div>
                  <Img src={ user.photos.small !== null ? user.photos.small : avatar } alt=""/>
                </div>
                 <div>
                   { user.followed ?
                     <button onClick={ () => {
                       this.props.unFollow(user.id)
                     }
                     }>UnFollow</button>
                     : <button onClick={ () => {
                       this.props.follow(user.id)
                     }
                     }>Follow</button> }
                </div>
              </span>
              <span>
                <span>
                  <div>{ user.name }</div>
                   <div>{ user.status }</div>
                </span>
                 <span>
                  <div>{ 'user.location.city' }</div>
                   <div>{ 'user.location.country' }</div>
                </span>
              </span>
            </div>
          )
        }) }
      </UsersContainer>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  pageSize: state.users.pageSize,
  totalCountUsers: state.users.totalCountUsers,
  currentPage: state.users.currentPage
});

const mapDispatchToProps = {
  follow,
  unFollow,
  setUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);