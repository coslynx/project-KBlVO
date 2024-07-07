import { SET_GOAL, UPDATE_GOAL, DELETE_GOAL } from '../types';

export const setGoal = (goal) => {
  return {
    type: SET_GOAL,
    payload: goal
  };
};

export const updateGoal = (goal) => {
  return {
    type: UPDATE_GOAL,
    payload: goal
  };
};

export const deleteGoal = (goalId) => {
  return {
    type: DELETE_GOAL,
    payload: goalId
  };
};