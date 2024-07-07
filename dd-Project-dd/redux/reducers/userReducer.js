const initialState = {
  users: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        users: [...state.users, action.payload],
      };
    case 'ADD_USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'REMOVE_USER':
      const updatedUsers = state.users.filter(user => user.id !== action.payload);
      return {
        ...state,
        users: updatedUsers,
      };
    default:
      return state;
  }
};

export default userReducer;