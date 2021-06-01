import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProfileDomain = state => state.profiles || initialState;


const makeSelectProfile = () => 
  createSelector(
    selectProfileDomain,
    substate => substate,
  );

const makeSelectAttendeeCount = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.posts,
  );

export default makeSelectProfile;
export { selectProfileDomain,
  makeSelectAttendeeCount,
};