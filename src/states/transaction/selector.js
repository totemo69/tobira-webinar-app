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

const makeSelectTransactionDetails = () =>
  createSelector(
    selectTransactionDomain,
    (substate) => substate.transactionDetails,
  );

const makeSelectTransactionDetailsId = () =>
  createSelector(selectTransactionDomain, (substate) => substate.id);

export default makeSelectTransaction;
export {
  makeSelectTransactionList,
  makeSelectTransactionDetails,
  makeSelectTransactionDetailsId,
};
