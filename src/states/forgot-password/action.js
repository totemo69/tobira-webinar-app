import { FORGOT_PASSWORD, RESET_PASSWORD, SET_PASSWORD } from './types';

export const forgotPassword = (payload) => ({
  type: FORGOT_PASSWORD,
  payload,
});

export const resetPassword = (payload) => ({
  type: RESET_PASSWORD,
  payload,
});

export const setPassword = (payload) => ({
  type: SET_PASSWORD,
  payload,
});
