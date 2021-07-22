import {
  GET_ZOOM_ACCOUNT,
  SUBMIT_ZOOM_CODE,
  SET_ZOOM_ACCOUNT,
  SET_ZOOM_ACCOUNT_LIST,
} from './types';

export const getZoomAccount = (payload) => ({
  type: GET_ZOOM_ACCOUNT,
  payload,
});

export const setZoomAccount = (payload) => ({
  type: SET_ZOOM_ACCOUNT,
  payload,
});

export const setZoomAccountList = (payload) => ({
  type: SET_ZOOM_ACCOUNT_LIST,
  payload,
});

export const submitZoomCode = (payload) => ({
  type: SUBMIT_ZOOM_CODE,
  payload,
});
