import {
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAIL,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
} from '../actions/todo';

const initialState = {
  error: '',
  todos: [],
};

const findAndReplace = (state, data) => {
  const todoCopy = state.todos.slice();
  todoCopy.forEach((curr, idx) => {
    if (curr.id === data.id) {
      todoCopy.splice(idx, 1, data);
    }
  });
  return todoCopy;
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
    return {
      ...state,
      todos: findAndReplace(state, action.data),
    };
  case UPDATE_TODO_FAIL:
    return {
      ...state,
      error: action.error,
    };
  case DELETE_TODO_SUCCESS:

    return {};
  case DELETE_TODO_FAIL:

    return {};
  default:
    return state;
  }
};

export default todo;

