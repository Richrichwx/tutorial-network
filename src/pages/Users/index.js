import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Follow, setUsers, unFollow } from '../../store/users/users.action';

const UsersContainer = styled.div`
  width: 800px;
  background: #c2a7a1;
  height: 460px;
  padding: 20px 0;
`;

const Img = styled.img`
  width: 100px;
  height: 50px;
`;

class Users extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <UsersContainer>
        {users.users.map((user,id) => {
          return (
            <div key={id}>
              <span>
                <div>
                  <Img src={user.image} alt=""/>
                </div>
                 <div>
                 <button>Follow</button>
                </div>
              </span>
              <span>
                <span>
                  <div>{user.fullName}</div>
                   <div>{user.status}</div>
                </span>
                 <span>
                  <div>{user.location.city}</div>
                   <div>{user.location.country}</div>
                </span>
              </span>
            </div>
          )
        })}
      </UsersContainer>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = {
  Follow,
  unFollow,
  setUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);