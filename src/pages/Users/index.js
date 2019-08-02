import React from 'react';
import styled from 'styled-components';
import avatar from '../../assets/image.jpeg';
import { connect } from 'react-redux';
import {
  followUsersThunk,
  getUsersThunk,
  setPages,
  unFollowUsersThunk
} from '../../store/users/users.action';
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
    this.props.getUsersThunk(this.props.currentPage,this.props.pageSize);
  }

  switchPages = (str) => {
    this.props.getUsersThunk(str, this.props.pageSize)
  };

  navigateTo = (e, path) => {
    e.preventDefault();
    window.navigate.push(`/${path}`)
  };

  render() {
    const { users, pageSize, totalCountUsers, currentPage } = this.props;
    let pagesCount = Math.ceil(totalCountUsers / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return (
      <UsersContainer>
        <div>
          { pages.map((page, id) => {
            return (
              <span key={ id } onClick={ () => {this.switchPages(page)} }>
                { currentPage === page ? (
                  <b>{ page }</b>
                ) : (
                  <span>{ page }</span>
                ) }
                </span>
            )
          }) }
        </div>
        { users.users.map((user) => {
          return (
            <div key={ user.id }>
              <span>
                <div>
                    <a href="/profile" onClick={ (e) => this.navigateTo(e, `profile/${user.id}`) }>
                      <Img src={ user.photos.small !== null ? user.photos.small : avatar } alt=""/>
                     </a>
                </div>
                 <div>
                   { user.followed ?
                     <button onClick={ () => {
                       this.props.unFollowUsersThunk(user.id)
                     }
                     }>UnFollow</button>
                     : <button onClick={ () => {
                       this.props.followUsersThunk(user.id)
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
  currentPage: state.users.currentPage,
});

const mapDispatchToProps = {
  setPages,
  getUsersThunk,
  followUsersThunk,
  unFollowUsersThunk
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);