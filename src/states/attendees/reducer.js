import produce from 'immer';
import { SET_ATTENDEE_DETAILS, SET_WEBINAR_ATTENDEES } from './types';

export const initialState = {
  attendeeList: [],
  attendeeDetails: {},
};

/* eslint-disable default-case, no-param-reassign */
const atendeeCheck = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_ATTENDEE_DETAILS: {
        draft.attendeeDetails = action.payload;
        break;
      }
      case SET_WEBINAR_ATTENDEES: {
        draft.attendeeList = action.payload;
        break;
      }
    }
  });

export default atendeeCheck;
