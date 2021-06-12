import {
  GET_PROFILE,
  SET_PROFILE,
  UPDATE_PROFILE,
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
