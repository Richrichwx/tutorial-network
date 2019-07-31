import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/image.jpeg';
import { connect } from 'react-redux';
import { follow, setPages, setTotalCount, setUsers, unFollow } from '../../store/users/users.action';

import * as axios from 'axios';
//we export everything there

const UsersContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  padding: 20px 0;
`;

const Img = styled.img`
  width: 100px;
  height: 50px;
`;


class Users extends React.Component {

componentDidMount() {
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
    withCredentials: true,
  })
       .then(response => {
    this.props.setUsers(response.data.items);
    this.props.setTotalCount(response.data.totalCount);
  })
}
  switchPages = (str) => {
  this.props.setPages(str);
  axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${str}&count=${this.props.pageSize}`, {
    withCredentials: true
  })
       .then(response => {
      this.props.setUsers(response.data.items);
    })
};

  navigateTo = (e, path) => {
    e.preventDefault();
    window.navigate.push(`/${path}`)
  };
  render() {
    const { users, pageSize, totalCountUsers, currentPage } = this.props;
    let pagesCount = Math.ceil(totalCountUsers / pageSize);
    let pages = [];
    for(let i=1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <UsersContainer>
        <div>
          { pages.map((page,id )=> {
            return (
              <span key={id} onClick={() => {this.switchPages(page)}}>
                {currentPage === page ? (
                  <b>{page}</b>
                ) : (
                  <span>{page}</span>
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
                    <a href="/profile" onClick={(e) => this.navigateTo(e, `profile/${user.id}`)}>
                      <Img src={ user.photos.small !== null ? user.photos.small : avatar } alt=""/>
                     </a>
                </div>
                 <div>
                   { user.followed ?
                     <button onClick={ () => {
                       axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                         withCredentials: true,
                         headers: {
                           "API-KEY": "f60e318e-a7eb-46ab-aa61-dd840b8c28fa"
                         }
                       })
                            .then(response => {
                              if (response.data.resultCode === 0) {
                                this.props.unFollow(user.id)
                              }
                            })
                     }
                     }>UnFollow</button>
                     : <button onClick={ () => {
                       axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + user.id, {}, {
                         withCredentials: true,
                         headers: {
                           "API-KEY": "f60e318e-a7eb-46ab-aa61-dd840b8c28fa"
                         }
                       })
                            .then(response => {
                              if (response.data.resultCode === 0) {
                                this.props.follow(user.id)
                              }
                            })
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
  setUsers,
  setPages,
  setTotalCount
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);