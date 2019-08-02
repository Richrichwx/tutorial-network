import { followUsers, getUsers, unFollowUsers } from './users.api';

export const follow = (userId) => ({
  type: 'FOLLOW',
  userId
});

export const unFollow = (userId) => ({
  type: 'UNFOLLOW',
  userId
});

export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const setPages = (currentPage) => ({
  type: 'SET_PAGES',
  currentPage
});

export const setTotalCount = (count) => ({
  type: 'SET_TOTAL_COUNT',
  count
});

export const getUsersThunk = (currentPage,pageSize) => {
  return (dispatch) => {
    getUsers(currentPage,pageSize)
      .then(data => {
        dispatch(setUsers(data.items));
        dispatch(setPages(currentPage));
        dispatch(setTotalCount(data.totalCount));
      })

}

};

export const followUsersThunk = (id) => {
  return (dispatch) => {
    followUsers(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(follow(id))
        }
      })
  }
};

export const unFollowUsersThunk = (id) => {
  return (dispatch) => {
    unFollowUsers(id)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unFollow(id))
        }
      })
  }
};