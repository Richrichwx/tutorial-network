import { createSelector } from 'reselect';

const getUsersSelector = (state) => {
  return state.users.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter(user => true)
});

export const getPageSize = (state) => {
  return state.users.pageSize;
};

export const getTotalCount = (state) => {
  return state.users.totalCountUsers;
};

export const getCurrentPage = (state) => {
  return state.users.currentPage;
};
