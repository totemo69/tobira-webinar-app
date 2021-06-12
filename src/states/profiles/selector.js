import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProfileDomain = state => state.profile || initialState;

const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );

const makeSelectProfileDetails = () =>
  createSelector(
    selectProfileDomain,
    substate => substate.profileDetails,
  );

export default makeSelectProfile;
export { makeSelectProfileDetails };