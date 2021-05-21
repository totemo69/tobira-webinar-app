import { createSelector } from 'reselect';
import { initialState } from './reducer';


const selectAttendeeDomain = state => state.attendee || initialState;

const makeSelectAttendee = () => 
  createSelector(
    selectAttendeeDomain,
    substate => substate,
  );

const makeSelectAttendeeCount = () =>
  createSelector(
    selectAttendeeDomain,
    substate => substate.posts,
  );

export default makeSelectAttendee;

export {
  makeSelectAttendeeCount,
};