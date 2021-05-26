import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectSignUpDomain = state => state.signup || initialState;

const makeSelectAttendee = () => 
  createSelector(
    selectSignUpDomain,
    substate => substate,
  );


export default makeSelectAttendee;