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

export const getUsersThunk = (currentPage,pageSize) => async (dispatch) => {
   const { data } = await api.getUsers(currentPage,pageSize);
         dispatch(setUsers(data.items));
         dispatch(setPages(currentPage));
         dispatch(setTotalCount(data.totalCount));
};

export const followUsersThunk = (id) => async (dispatch) => {
  const { data } = await api.followUsers(id);
  if (data.resultCode === 0) {
    dispatch(follow(id))
  }
};

export const unFollowUsersThunk = (id) => async (dispatch) => {
  const { data } = await api.unFollowUsers(id);
  if (data.resultCode === 0) {
    dispatch(unFollow(id))
  }
};