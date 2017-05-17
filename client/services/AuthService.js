import xhrReq from '../utils/xhr';

const login = (username, password) => {
  return xhrReq({
    path: '/auth/login',
    method: 'POST',
    body: {
      username,
      password,
    },
  });
};

const logout = () => {};

const register = (username, password) => {
  return xhrReq({
    path: 'auth/register',
    method: 'POST',
    body: {
      username,
      password,
    },
  });
};

const AuthService = {
  login,
  logout,
  register,
};

export default AuthService;
