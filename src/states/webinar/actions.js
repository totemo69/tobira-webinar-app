import {
  GET_WEBINAR_LIST,
  SET_WEBINAR_LIST,
  CREATE_WEBINAR,
  WEBINAR_DETAILS,
  SET_WEBINAR,
} from './types';

export const getWebinarList = (payload) => ({
  type: GET_WEBINAR_LIST,
  payload,
});

export const setWebinarList = (payload) => ({
  type: SET_WEBINAR_LIST,
  payload,
});

export const createWebinar = () => ({
  type: CREATE_WEBINAR,
});

export const setWebinarDetails = (payload) => ({
  type: WEBINAR_DETAILS,
  payload,
});

export const setWebinar = (payload) => ({
  type: SET_WEBINAR,
  payload,
});
