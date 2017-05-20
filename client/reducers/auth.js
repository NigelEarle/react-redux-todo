import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/auth';

const initialState = {
  error: null,
  user: {
    id: null,
    username: '',
  },
};

export const auth = (state = initialState, action = {}) => {
  switch (action.type) {
  case LOGIN_SUCCESS:

    return {
      error: '',
      user: {
        id: action.data.id,
        username: action.data.username,
      },

    };
  case LOGIN_FAIL:

    return {
      ...state,
      error: action.error,
    };

  case LOGOUT_SUCCESS:

    return {
      error: '',
      user: {},
    };

  case LOGOUT_FAIL:

    return {
      ...state,
      error: action.error,
    };
  case REGISTER_SUCCESS:

    return {
      error: '',
      user: {
        id: action.data.id,
        username: action.data.username,
      },
    };
  case REGISTER_FAIL:

    return {
      ...state,
      error: action.error,
    };
  default:
    return state;
  }
};

export default auth;
