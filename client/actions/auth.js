import { AuthService } from '../services';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

// Dispatched functions
const loginSuccess = data => (
  {
    type: LOGIN_SUCCESS,
    data,
  }
);


const loginFail = error => (
  {
    type: LOGIN_FAIL,
    error,
  }
);

const registerSuccess = data => (

  {
    type: REGISTER_SUCCESS,
    data,
  }
);


const registerFail = error => (
  {
    type: REGISTER_FAIL,
    error,
  }
);


// Async actions
export const loginAsync = (username, password) => (
  dispatch => (
    AuthService.login(username, password)
    .then((data) => {
      dispatch(loginSuccess(data));
    })
    .catch((err) => {
      dispatch(loginFail(err));
    })
  )
);

export const registerAsync = (username, password) => (
  dispatch => (
    AuthService.register(username, password)
    .then((data) => {
      dispatch(registerSuccess(data));
    })
    .catch((err) => {
      dispatch(registerFail(err));
    })
  )
);
