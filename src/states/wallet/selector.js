import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWalletDomain = (state) => state.wallet || initialState;

const makeSelectWallet = () =>
  createSelector(selectWalletDomain, (substate) => substate);

const makeSelectBankList = () =>
  createSelector(selectWalletDomain, (substate) => substate.bankList);

const makeSelectAddBank = () =>
  createSelector(selectWalletDomain, (substate) => substate.bank);

const makeSelectWithdraw = () =>
  createSelector(selectWalletDomain, (substate) => substate.withdraw);

const makeSelectMyWallet = () =>
  createSelector(selectWalletDomain, (substate) => substate.wallet);

export default makeSelectWallet;
export {
  makeSelectBankList,
  makeSelectAddBank,
  makeSelectWithdraw,
  makeSelectMyWallet,
};
