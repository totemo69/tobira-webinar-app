import {
  GET_PROFILE,
  SET_PROFILE,
  UPDATE_PROFILE,
  UPDATE_CREDENTIALS,
} from './types';

export const getProfile = () => ({
  type: GET_PROFILE,
});

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload,
});

export const updateProfile = (payload) => ({
  type: UPDATE_PROFILE,
  payload,
});

export const updateCredentials = (payload) => ({
  type: UPDATE_CREDENTIALS,
  payload,
});
