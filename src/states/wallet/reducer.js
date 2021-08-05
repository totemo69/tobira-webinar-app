import produce from 'immer';
import {
  REMOVE_BANK,
  SET_BANK,
  SET_BANK_LIST,
  SET_WITHDRAW,
  SET_WALLET,
} from './types';

export const initialState = {
  bankList: [],
  bank: {},
  withdraw: {
    amount: '',
    gatewayType: '',
    gatewayDetails: {
      paypal: '',
      bankName: '',
      branchCode: '',
      branchName: '',
      accountName: '',
      accountNumber: '',
      accountType: '',
      requestorName: '',
      requestorDate: '',
      includeTax: '',
      transferAmount: '',
    },
  },
  wallet: {},
};
/* eslint-disable default-case, no-param-reassign */
const walletReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_BANK_LIST: {
        draft.bankList = action.payload;
        break;
      }
      case SET_BANK: {
        draft.bank = {
          ...draft.bank,
          ...action.payload,
        };
        break;
      }
      case SET_WITHDRAW: {
        draft.withdraw = {
          ...draft.withdraw,
          ...action.payload,
        };
        break;
      }
      case REMOVE_BANK: {
        draft.bankList = draft.bankList.filter((item) => item.id !== action.id);
        break;
      }
      case SET_WALLET: {
        draft.wallet = action.payload;
        break;
      }
    }
  });

export default walletReducer;
