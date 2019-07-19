const initialState = {
  nameUser: [
    {
      id: 1,
      name: 'Anna'
    },
    {
      id: 2,
      name: 'Alex'
    },
    {
      id: 3,
      name: 'Marya'
    }
  ]
};

export default function (state = initialState,action) {
  switch (action.type) {
    case 'GET_USER': {
      return {
        ...state,
        nameUser: [...state.nameUser],
      };
    }
    default:
      return state;
  }
};