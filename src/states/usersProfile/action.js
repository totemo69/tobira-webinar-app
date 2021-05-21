import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILED
} from './types';

export const getUseProfile = (payload) => ({
  type: GET_USER_PROFILE,
  payload,
});

export const getUserProfileSuccess = (payload) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload,
});

export const getUserProfileFailed = (payload) => ({
  type: GET_USER_PROFILE_FAILED,
  payload,
});