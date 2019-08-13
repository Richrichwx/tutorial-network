export const getUsers = (state) => {
  return state.users.users
};

export const getPageSize = (state) => {
  return state.users.pageSize
};

export const getTotalCount = (state) => {
  return state.users.totalCountUsers
};

export const getCurrentPage = (state) => {
  return state.users.currentPage
};
