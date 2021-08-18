import {
  GET_ZOOM_ACCOUNT,
  SUBMIT_ZOOM_CODE,
  SET_ZOOM_ACCOUNT,
  SET_ZOOM_ACCOUNT_LIST,
  CREATE_ZOOM_ACCOUNT,
  ZOOM_SUBSCRIPTION,
  CAPTURE_PURCHASE,
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

export const createZoomUser = (successCallback, errCallback) => ({
  type: CREATE_ZOOM_ACCOUNT,
  successCallback,
  errCallback,
});

export const zoomSubscription = (payload, successCallback, errCallback) => ({
  type: ZOOM_SUBSCRIPTION,
  payload,
  successCallback,
  errCallback,
});

export const captureLicensePurchase = (
  payload,
  successCallback,
  errCallback,
) => ({
  type: CAPTURE_PURCHASE,
  payload,
  successCallback,
  errCallback,
});
