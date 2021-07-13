import { SIGNUP, VERIFY } from './type';

export const signUp = (payload) => ({
  type: SIGNUP,
  payload,
});

export const verify = (payload) => ({
  type: VERIFY,
  payload,
});
