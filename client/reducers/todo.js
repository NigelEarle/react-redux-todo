import {
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_FAIL,
} from '../actions/todo';

const initialState = {
  error: '',
  todos: [],
};

export const todo = (state = initialState, action = {}) => {
  switch (action.type) {
  case FETCH_TODOS_SUCCESS:
    return {
      ...state,
      todos: action.data,
    };
  case FETCH_TODOS_FAIL:

    return {
      ...state,
      error: action.error,
    };
  case ADD_TODO_SUCCESS:

    return {
      ...state,
      error: '',
      todos: state.todos.concat(action.data),
    };
  case ADD_TODO_FAIL:

    return {
      ...state,
      error: action.error,
    };
  case UPDATE_TODO_SUCCESS:

    return {};
  case UPDATE_TODO_FAIL:

    return {};
  case COMPLETE_TODO_SUCCESS:

    return {};
  case COMPLETE_TODO_FAIL:

    return {};
  default:
    return state;
  }
};

export default todo;

