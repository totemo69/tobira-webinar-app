export const GET_ATENDEE = 'GET_ATENDEE';
export const GET_ATENDEE_SUCCESS = 'GET_ATENDEE_SUCCESS';
export const GET_ATENDEE_FAILED = 'GET_ATENDEE_FAILED';


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