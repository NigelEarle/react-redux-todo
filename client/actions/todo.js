import TodoService from '../services/TodoService';

export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAIL = 'FETCH_TODOS_FAIL';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAIL = 'ADD_TODO_FAIL';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_FAIL = 'UPDATE_TODO_FAIL';
export const COMPLETE_TODO_SUCCESS = 'COMPLETE_TODO_SUCCESS';
export const COMPLETE_TODO_FAIL = 'COMPLETE_TODO_FAIL';

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

const completeTodoSuccess = data => (
  {
    type: COMPLETE_TODO_SUCCESS,
    data,
  }
);

const completeTodoFail = error => (
  {
    type: COMPLETE_TODO_FAIL,
    error,
  }
);

// Async actions
export const fetchTodosAsync = id => (dispatch) => {
  return TodoService.fetchTodos(id)
    .then(data => dispatch(fetchTodosSuccess(data.data.data)))
    .catch(error => dispatch(fetchTodosFail(error)));
};

export const addTodoAsync = todo => (dispatch) => {
  return TodoService.addTodo(todo)
    .then(data => dispatch(addTodoSuccess(data.data.data)))
    .catch(error => dispatch(addTodoFail(error)));
};

export const updateTodoAsync = todo => (dispatch) => {
  return TodoService.updateTodo(todo)
    .then((result) => {
      dispatch(updateTodoSuccess(result));
    })
    .catch(error => {
      dispatch(updateTodoFail(error));
    });
};

export const completeTodoAsync = todo => (dispatch) => {
  return TodoService.completeTodo(todo)
    .then(() => dispatch(completeTodoSuccess()))
    .catch(error => dispatch(completeTodoFail(error)));
};

