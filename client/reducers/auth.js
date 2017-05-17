import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../actions/auth';

const initialState = {
  error: null,
  user: {
    id: null,
    username: null,
  },
};

export const auth = (state = initialState, action = {}) => {
  switch (action.type) {
  case LOGIN_SUCCESS:
    return {
      user: {
        id: action.user.id,
        username: action.user.username,
      },
      ...state,
    };
  case LOGIN_FAIL:
    return {
      error: action.error,
      ...state,
    };
  case REGISTER_SUCCESS:
    return {
      ...state,
      user: {
        id: action.data.id,
        username: action.data.username,
      },
    };
  case REGISTER_FAIL:
    return {
      error: action.err,
      ...state,
    };
  default:
    return state;
  }
};

export default auth;
