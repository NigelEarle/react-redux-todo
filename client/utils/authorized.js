import xhrUtil from './xhr';

export const checkSession = () => {
  return xhrUtil({
    path: '/auth/session',
    method: 'GET',
  })
};
