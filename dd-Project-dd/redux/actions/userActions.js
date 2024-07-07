import { ActionTypes } from '../constants';

export const createUser = (userData) => {
  return async (dispatch, getState, { authService }) => {
    try {
      // Perform user creation logic here using authService
      const newUser = await authService.createUser(userData);

      dispatch({
        type: ActionTypes.CREATE_USER_SUCCESS,
        payload: newUser,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.CREATE_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const updateUser = (userId, updatedUserData) => {
  return async (dispatch, getState, { authService }) => {
    try {
      // Perform user update logic here using authService
      const updatedUser = await authService.updateUser(userId, updatedUserData);

      dispatch({
        type: ActionTypes.UPDATE_USER_SUCCESS,
        payload: updatedUser,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.UPDATE_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch, getState, { authService }) => {
    try {
      // Perform user deletion logic here using authService
      await authService.deleteUser(userId);

      dispatch({
        type: ActionTypes.DELETE_USER_SUCCESS,
        payload: userId,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.DELETE_USER_FAILURE,
        payload: error.message,
      });
    }
  };
};

// Add more user-related actions as needed for the project.