import {
  GET_ATENDEE,
  GET_ATENDEE_SUCCESS,
  GET_ATENDEE_FAILED,
  GET_ATENDEE_COUNT,
  GET_ATENDEE_COUNT_SUCCESS,
  GET_ATENDEE_COUNT_FAILED
} from './types';


export const getAttendee = (payload) => ({
  type: GET_ATENDEE,
  payload,
});

export const getAttendeeSuccess = (payload) => ({
  type: GET_ATENDEE_SUCCESS,
  payload,
});

export const getAttendeeFailed = (payload) => ({
  type: GET_ATENDEE_FAILED,
  payload,
});

export const getAttendeeCount = (payload) => ({
  type: GET_ATENDEE_COUNT,
  payload,
});

export const getAttendeeCountSuccess = (payload) => ({
  type: GET_ATENDEE_COUNT_SUCCESS,
  payload,
});

export const getAttendeeCountFailed = (payload) => ({
  type: GET_ATENDEE_COUNT_FAILED,
  payload,
});