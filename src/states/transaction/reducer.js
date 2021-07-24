import produce from 'immer';
import { SET_TRANSACTION } from './types';

export const initialState = {
  transactionList: [],
};
/* eslint-disable default-case, no-param-reassign */
const transactionReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_TRANSACTION: {
        draft.transactionList = action.payload;
        break;
      }
    }
  });

export default transactionReducer;
