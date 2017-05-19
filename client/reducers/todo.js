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

const findAndReplace = (data, state) => {
  const todosCopy = state.todos.slice();
  todosCopy.forEach((curr, idx) => {
    if (curr.id === data.id) {
      todosCopy.splice(idx, 1, data);
    }
  });
  return todosCopy;
};

const deleteTodo = (id, state) => {
  return state.todos.filter(curr => curr.id !== id);
};

export const todo = (state = initialState, action = {}) => {
  switch (action.type) {
  case FETCH_TODOS_SUCCESS:

    return {
      ...state,
      error: '',
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
      error: '',
      todos: findAndReplace(action.data, state),
    };
  case UPDATE_TODO_FAIL:

    return {
      ...state,
      error: action.error,
    };
  case DELETE_TODO_SUCCESS:

    return {
      ...state,
      error: '',
      todos: deleteTodo(action.id, state),
    };
  case DELETE_TODO_FAIL:

    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default todo;

