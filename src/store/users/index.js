const initialState = {
  users:[],
  pageSize: 10,
  totalCountUsers: 0,
  currentPage: 1,
  followingProgress: false
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
        users: action.users
      }
    }
    case 'SET_PAGES' : {
      return {
        ...state,
        currentPage: action.currentPage
      }
    }
    case 'SET_TOTAL_COUNT' : {
      return {
        ...state,
        totalCountUsers: action.count
      }
    }
    default:
      return state;
  }
}