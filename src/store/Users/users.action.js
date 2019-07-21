export const Follow = (userId) => ({
  type: 'FOLLOW',
  userId
});

export const unFollow = (userId) => ({
  type: 'UNFOLLOW',
  userId
});