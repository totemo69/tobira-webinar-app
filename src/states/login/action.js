import {
  AUTH_LOGIN_USER,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
} from './types';
  
export const authenticateUser = (payload) => ({
  type: AUTH_LOGIN_USER,
  payload,
});
  
export const loginSuccess = (payload) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload,
});
  
export const loginFailed = (payload) => ({
  type: AUTH_LOGIN_FAILED,
  payload,
});