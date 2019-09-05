import api from './users.api';

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

export const getUsersThunk = (currentPage,pageSize) => (dispatch) => {
    api.getUsers(currentPage,pageSize)
       .then(response => {
         dispatch(setUsers(response.data.items));
         dispatch(setPages(currentPage));
         dispatch(setTotalCount(response.data.totalCount));
       })
};

export const followUsersThunk = (id) => (dispatch) => {
    api.followUsers(id)
       .then(response => {
         if (response.data.resultCode === 0) {
           dispatch(follow(id))
         }
       })
};

export const unFollowUsersThunk = (id) => (dispatch) => {
    api.unFollowUsers(id)
       .then(response => {
         if (response.data.resultCode === 0) {
           dispatch(unFollow(id))
         }
       })
};