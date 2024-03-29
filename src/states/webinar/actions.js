import {
  GET_WEBINAR_LIST,
  SET_WEBINAR_LIST,
  CREATE_WEBINAR,
  WEBINAR_DETAILS,
  SET_WEBINAR,
  SET_UPDATE_WEBINAR,
  SET_WEBINAR_DETAILS,
  SET_WEBINAR_PUBLIC,
  GET_WEBINAR_PUBLIC,
  GET_WEBINAR_DETAILS,
  WEBINAR_REGISTER,
  DO_REGISTER,
  DO_PAY,
  CAPTURE_PAYMENT,
  SET_ATTENDEE,
  SET_PAYMENT,
  UPDATE_WEBINAR,
  DO_CONFIRM_REGISTRATION,
  CLEAR_WEBINAR,
  UPDATE_STATUS,
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

export const updateWebinar = () => ({
  type: UPDATE_WEBINAR,
});

export const setWebinarDetails = (payload) => ({
  type: WEBINAR_DETAILS,
  payload,
});

export const setWebinar = (payload) => ({
  type: SET_WEBINAR,
  payload,
});

export const setUpdateWebinar = (payload) => ({
  type: SET_UPDATE_WEBINAR,
  payload,
});

export const clearWebinar = (payload) => ({
  type: CLEAR_WEBINAR,
  payload,
});

export const setWebinarPublic = (payload) => ({
  type: SET_WEBINAR_PUBLIC,
  payload,
});

export const setWebinarDetail = (payload) => ({
  type: SET_WEBINAR_DETAILS,
  payload,
});

export const getWebinarPublic = (payload) => ({
  type: GET_WEBINAR_PUBLIC,
  payload,
});

export const getWebinarDetail = (payload) => ({
  type: GET_WEBINAR_DETAILS,
  payload,
});

export const setWebinarRegistration = (payload) => ({
  type: WEBINAR_REGISTER,
  payload,
});

export const doRegister = () => ({
  type: DO_REGISTER,
});

export const doConfirmRegister = (payload) => ({
  type: DO_CONFIRM_REGISTRATION,
  payload,
});

export const doPay = (payload) => ({
  type: DO_PAY,
  payload,
});

export const capturePayment = (payload) => ({
  type: CAPTURE_PAYMENT,
  payload,
});

export const setAttendee = (payload) => ({
  type: SET_ATTENDEE,
  payload,
});

export const setPayment = (payload) => ({
  type: SET_PAYMENT,
  payload,
});

export const updateStatus = (payload) => ({
  type: UPDATE_STATUS,
  payload,
});
