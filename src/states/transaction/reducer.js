import produce from 'immer';
import { SET_TRANSACTION, SET_TRANSACTION_DETAILS } from './types';

export const initialState = {
  transactionList: [],
  transactionDetails: {
    id: 0,
    user: '',
    transactionType: '',
    transactionDate: '',
    amount: '',
    notes: '',
    status: '',
  },
  id: '0',
};
/* eslint-disable default-case, no-param-reassign */
const transactionReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TRANSACTION: {
        draft.transactionList = action.payload;
        break;
      }
      case SET_TRANSACTION_DETAILS: {
        draft.transactionDetails = action.payload;
        break;
      }
    }
  });

export default transactionReducer;
