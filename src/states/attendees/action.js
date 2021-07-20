import {
  GET_ATTENDEE_DETAILS,
  SET_ATTENDEE_DETAILS,
  SET_WEBINAR_ATTENDEES,
  GET_WEBINAR_ATTENDEES,
} from './types';

export const getAttendeeDetails = (payload) => ({
  type: GET_ATTENDEE_DETAILS,
  payload,
});

export const setAttendeeDetails = (payload) => ({
  type: SET_ATTENDEE_DETAILS,
  payload,
});

export const getAttendeeList = (payload) => ({
  type: GET_WEBINAR_ATTENDEES,
  payload,
});

export const setAttendeeList = (payload) => ({
  type: SET_WEBINAR_ATTENDEES,
  payload,
});
