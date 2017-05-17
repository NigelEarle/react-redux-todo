import { combineReducers } from 'redux';
import auth from './auth';
import todo from './todo';

const rootReducer = combineReducers({
  auth,
  todo,
});

export default rootReducer;
