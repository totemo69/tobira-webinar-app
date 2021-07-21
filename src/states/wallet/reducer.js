import produce from 'immer';
import { SET_BANK, SET_BANK_LIST } from './types';

export const initialState = {
  bankList: [],
  bank: {},
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
    }
  });

export default walletReducer;
