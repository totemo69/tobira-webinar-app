import { LOGIN, SET_LOGIN } from './types';

export const authenticateUser = (payload, errCallback) => ({
  type: LOGIN,
  payload,
  errCallback,
});

export const setLogin = (payload) => ({
  type: SET_LOGIN,
  payload,
});
