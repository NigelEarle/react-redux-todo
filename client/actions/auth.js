import AuthService from '../services/AuthService';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';
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

const logoutSuccess = () => (
  {
    type: LOGOUT_SUCCESS,
  }
);

const logoutFail = error => (
  {
    type: LOGOUT_FAIL,
    error,
  }
);

// Async actions
export const loginAsync = (username, password) => (dispatch) => {
  return AuthService.login(username, password)
    .then(data => dispatch(loginSuccess(data.data)))
    .catch(error => dispatch(loginFail(error)));
};

export const registerAsync = (username, password) => (dispatch) => {
  return AuthService.register(username, password)
    .then(data => dispatch(registerSuccess(data.data)))
    .catch(error => dispatch(registerFail(error)));
};

export const logoutAsync = () => (dispatch) => {
  return AuthService.logout()
    .then(() => dispatch(logoutSuccess()))
    .catch(error => dispatch(logoutFail(error)));
};
