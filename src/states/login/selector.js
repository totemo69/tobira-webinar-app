import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoginDomain = state => state.login || initialState;

/**
 * Default selector used by Counter
 */

const makeSelectLogin = () =>
  createSelector(
    selectLoginDomain,
    substate => substate,
  );

export default makeSelectLogin;
export { selectLoginDomain };