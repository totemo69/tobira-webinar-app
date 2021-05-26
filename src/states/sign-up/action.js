import {
  GET_SIGNUP,
  GET_SIGNUP_SUCCESS,
  GET_SIGNUP_FAILED,
  POST_SIGNUP,
  POST_SIGNUP_SUCCESS,
  POST_SIGNUP_FAILED
} from './type';


export const fetchSingup = (payload) => ({
  type: GET_SIGNUP,
  payload,
});

export const fetchSingupSuccess = (payload) => ({
  type: GET_SIGNUP_SUCCESS,
  payload,
});

export const fetchSingupFailed = (payload) => ({
  type: GET_SIGNUP_FAILED,
  payload,
});

export const register = (payload) => ({
  type: POST_SIGNUP,
  payload,
});

export const registerSuccess = (payload) => ({
  type: POST_SIGNUP_SUCCESS,
  payload,
});
export const registerFailed = (payload) => ({
  type: POST_SIGNUP_FAILED,
  payload,
});

