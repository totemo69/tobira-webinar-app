import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProfileDomain = state => state.profile || initialState;

const makeSelectProfile = () =>
  createSelector(
    selectProfileDomain,
    substate => substate,
  );

export default makeSelectProfile;
export { selectProfileDomain };