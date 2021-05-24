import produce from 'immer';
import {
  PAYMENTS_COUNT,
  PAYMENTS_SUCCESS
} from './types';

const initialState = {
  isLoading: false,
  content: [],
  error: null,
};

const testPayment = (state = initialState, { type, payload }) => 
  produce(state, draft => {
    switch (type) {
    case PAYMENTS_COUNT:
      draft.isLoading = true;
      break;
    case PAYMENTS_SUCCESS:
      draft.isLoading = false;
      draft.content = payload;
      break;
    default:
      draft;
    }
  });

export default testPayment;