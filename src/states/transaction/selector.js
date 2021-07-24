import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTransactionDomain = (state) => state.transaction || initialState;

const makeSelectTransaction = () =>
  createSelector(selectTransactionDomain, (substate) => substate);

const makeSelectTransactionList = () =>
  createSelector(
    selectTransactionDomain,
    (substate) => substate.transactionList,
  );

export default makeSelectTransaction;
export { makeSelectTransactionList };
