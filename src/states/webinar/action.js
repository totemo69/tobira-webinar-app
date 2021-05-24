import {
  GET_WEBINAR,
  GET_WEBINAR_SUCCESS,
  GET_WEBINAR_FAILED
} from './types';


export const getWebinar = (payload) => ({
  type: GET_WEBINAR,
  payload,
});

export const getWebinarSuccess = (payload) => ({
  type: GET_WEBINAR_SUCCESS,
  payload,
});

export const getWebinarFailed = (payload) => ({
  type: GET_WEBINAR_FAILED,
  payload,
});