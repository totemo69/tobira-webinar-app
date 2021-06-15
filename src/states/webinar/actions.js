import {
  GET_WEBINAR_LIST,
  SET_WEBINAR_LIST,
} from './types';

export const getWebinarList = (payload) => ({
  type: GET_WEBINAR_LIST,
  payload,
});

export const setWebinarList = (payload) => ({
  type: SET_WEBINAR_LIST,
  payload,
});