const initialState = {
  users:[
    {
      id: 1,
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
      fullName: 'Marya G.',
      status: 'I am cute ',
      location: {
        city: 'Kiev',
        country: 'Ukraine'
      },
      followed: false
    }
  ]
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
    default:
      return state;
  }
}