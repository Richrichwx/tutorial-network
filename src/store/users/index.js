const initialState = {
  users:[],
  pageSize: 5,
  totalCountUsers: 0
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'FOLLOW' : {
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id ===  action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      }
    }
    case 'UNFOLLOW' : {
      return {
        ...state,
        users: state.users.map(user => {
          if(user.id ===  action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    }
    case 'SET_USERS' : {
      return {
        ...state,
        users: [...state.users, ...action.users]
      }
    }
    default:
      return state;
  }
}