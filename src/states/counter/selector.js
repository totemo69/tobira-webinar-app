import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectCounterDomain = state => state.counter || initialState;

/**
 * Default selector used by Counter
 */

const makeSelectCounter = () =>
  createSelector(
    selectCounterDomain,
    substate => substate,
  );

const makeSelectCount = () =>
  createSelector(
    selectCounterDomain,
    substate => substate.count,
  );

export default makeSelectCounter;

export {
  makeSelectCount,
};