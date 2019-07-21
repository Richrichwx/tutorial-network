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

class Users extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <UsersContainer>
        {users.users.map((user,id) => {
          return (
            <div key={id}>
              {user.fullName}
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