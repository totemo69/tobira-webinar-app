import {
  GET_PROFILE,
  PROFILE_SUCCESS,
  PROFILE_FAILED,
} from './types';

export const getProfile = (payload) => ({
  type: GET_PROFILE,
  payload,
});

export const profileSuccess = (payload) => ({
  type: PROFILE_SUCCESS,
  payload,
});

export const profileFailed = (payload) => ({
  type: PROFILE_FAILED,
  payload,
});