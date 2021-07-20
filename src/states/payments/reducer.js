import produce from 'immer';
import { SET_PAYMENT } from './types';

export const initialState = {
  paymentDetails: [],
};

/* eslint-disable default-case, no-param-reassign */
const testPayment = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case SET_PAYMENT:
        draft.paymentDetails = payload;
        break;
    }
  });

export default testPayment;
