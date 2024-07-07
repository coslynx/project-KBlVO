import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import goalReducer from '../reducers/goalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  goal: goalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;