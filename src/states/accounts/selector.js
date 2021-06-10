import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectAccountsDomain = state => state.accounts || initialState;

/**
 * Default selector used by Counter
 */

const makeSelectAccounts = () =>
  createSelector(
    selectAccountsDomain,
    substate => substate,
  );

const makeSelectAccount = () =>
  createSelector(
    selectAccountsDomain,
    substate => substate.zoomAccount,
  );

const makeSelectAccountList = () =>
  createSelector(
    selectAccountsDomain,
    substate => substate.zoomAccountList,
  );

export default makeSelectAccounts;
export { makeSelectAccount, makeSelectAccountList };