import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { follow, setUsers, unFollow } from '../../store/users/users.action';

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
  render() {
    const {users,setUsers} = this.props;

    if(users.users.length === 0)  {
      setUsers([
        {
          id: 1,
          image: 'http://stuki-druki.com/biofoto/Dmitriy-Egorov-3-01.jpg',
          fullName: 'Anna G.',
          status: 'I am cute ',
          location: {
            city: 'Moscow',
            country: 'Russia'
          },
          followed: false
        },
        {
          id: 2,
          image: 'http://stuki-druki.com/biofoto/Dmitriy-Egorov-3-01.jpg',
          fullName: 'Alex G.',
          status: 'I am smile',
          location: {
            city: 'Minsk',
            country: 'Belarus'
          },
          followed: true
        },
        {
          id: 3,
          image: 'http://stuki-druki.com/biofoto/Dmitriy-Egorov-3-01.jpg',
          fullName: 'June G.',
          status: 'I am cute ',
          location: {
            city: 'NY',
            country: 'Unated  State'
          },
          followed: true
        },
        {
          id: 4,
          image: 'http://stuki-druki.com/biofoto/Dmitriy-Egorov-3-01.jpg',
          fullName: 'Marya G.',
          status: 'I am cute ',
          location: {
            city: 'Kiev',
            country: 'Ukraine'
          },
          followed: false
        }
      ]);
    }

    return (
      <UsersContainer>
        {users.users.map((user,id) => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <Img src={user.image} alt=""/>
                </div>
                 <div>
                   {user.followed?
                     <button onClick={ () => {
                       this.props.unFollow(user.id)}
                     }>UnFollow</button>
                     : <button  onClick={ () => {
                       this.props.follow(user.id)}
                     } >Follow</button>}
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
  follow,
  unFollow,
  setUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);