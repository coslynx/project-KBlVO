const initialState = {
  goals: [],
  loading: false,
  error: null,
};

const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GOAL':
      return {
        ...state,
        goals: [...state.goals, action.payload],
      };
    case 'REMOVE_GOAL':
      return {
        ...state,
        goals: state.goals.filter(goal => goal.id !== action.payload),
      };
    case 'UPDATE_GOAL':
      return {
        ...state,
        goals: state.goals.map(goal =>
          goal.id === action.payload.id ? action.payload : goal
        ),
      };
    case 'FETCH_GOALS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_GOALS_SUCCESS':
      return {
        ...state,
        goals: action.payload,
        loading: false,
        error: null,
      };
    case 'FETCH_GOALS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default goalReducer;