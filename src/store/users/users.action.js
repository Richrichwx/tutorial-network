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