const initialState = {
  message: [],
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
    case 'ADD_MESSAGE': {
      return {
        ...state,
        message: [...state.message, action.message],
      };
    }
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