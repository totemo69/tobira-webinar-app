import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAttendeeDomain = (state) => state.attendee || initialState;

const makeSelectAttendee = () =>
  createSelector(selectAttendeeDomain, (substate) => substate);

const makeSelectAttendees = () =>
  createSelector(selectAttendeeDomain, (substate) => substate.attendeeList);

const makeSelectAttendeesDetails = () =>
  createSelector(selectAttendeeDomain, (substate) => substate.attendeeDetails);

export default makeSelectAttendee;

export { makeSelectAttendees, makeSelectAttendeesDetails };
