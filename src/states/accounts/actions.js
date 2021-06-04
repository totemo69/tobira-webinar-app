import {
  GET_ZOOM_ACCOUNT,
  GET_ZOOM_ACCOUNT_SUCCESS,
  GET_ZOOM_ACCOUNT_FAILED
} from './types';


export const getZoomAccount = (payload) => ({
  type: GET_ZOOM_ACCOUNT,
  payload,
});


export const getZoomAccountSuccess = (payload) => ({
  type: GET_ZOOM_ACCOUNT_SUCCESS,
  payload,
});

export const getZoomAccountFailed = (payload) => ({
  type: GET_ZOOM_ACCOUNT_FAILED,
  payload,
});