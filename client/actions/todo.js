import TodoService from '../services/TodoService';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAIL = 'DELETE_TODO_FAIL';

// Dispatched functions
const fetchTodosSuccess = data => (
  {
    type: FETCH_TODOS_SUCCESS,
    data,
  }
);


const fetchTodosFail = error => (
  {
    type: FETCH_TODOS_FAIL,
    error,
  }
);

const addTodoSuccess = data => (
  {
    type: ADD_TODO_SUCCESS,
    data,
  }
);

const addTodoFail = error => (
  {
    type: ADD_TODO_FAIL,
    error,
  }
);

const updateTodoSuccess = data => (
  {
    type: UPDATE_TODO_SUCCESS,
    data,
  }
);

const updateTodoFail = error => (
  {
    type: UPDATE_TODO_FAIL,
    error,
  }
);

const deleteTodoSuccess = id => (
  {
    type: DELETE_TODO_SUCCESS,
    id,
  }
);

const deleteTodoFail = error => (
  {
    type: DELETE_TODO_FAIL,
    error,
  }
);

// Async actions
export const fetchTodosAsync = () => (dispatch) => {
  return TodoService.fetchTodos()
    .then(({ data }) => dispatch(fetchTodosSuccess(data.data)))
    .catch(error => dispatch(fetchTodosFail(error)));
};

export const addTodoAsync = todo => (dispatch) => {
  return TodoService.addTodo(todo)
    .then(({ data }) => dispatch(addTodoSuccess(data.data)))
    .catch(error => dispatch(addTodoFail(error)));
};

export const updateTodoAsync = todo => (dispatch) => {
  return TodoService.updateTodo(todo)
    .then(({ data }) => dispatch(updateTodoSuccess(data.data)))
    .catch(error => dispatch(updateTodoFail(error)));
};

export const deleteTodoAsync = (id) => (dispatch) => {
  return TodoService.deleteTodo(id)
    .then(() => dispatch(deleteTodoSuccess(id)))
    .catch(error => dispatch(deleteTodoFail(error)));
};
