import {
  GET_WEBINAR_LIST,
  SET_WEBINAR_LIST,
  CREATE_WEBINAR,
  WEBINAR_DETAILS,
  SET_WEBINAR,
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
