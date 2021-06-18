import produce from 'immer';
import { PAYMENTS_GET, PAYMENTS_COUNT, PAYMENTS_SUCCESS } from './types';

const initialState = {
  isLoading: false,
  content: [],
  // error: null,
};

/* eslint-disable default-case, no-param-reassign */
const testPayment = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case PAYMENTS_COUNT:
        draft.isLoading = true;
        break;
      case PAYMENTS_GET:
        draft.isLoading = true;
        break;
      case PAYMENTS_SUCCESS:
        draft.isLoading = false;
        draft.content = payload;
        break;
    }
  });

export default testPayment;
