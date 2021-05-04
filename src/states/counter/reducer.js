import produce from 'immer';
import {
  INCREMENT,
  DECREMENT,
  RESET,
} from './types';

export const initialState = {
  count: 0,
};

const counter = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
    case INCREMENT:
      draft.count = draft.count + 1;
      break;
    case DECREMENT:
      draft.count = draft.count - 1;
      break;
    case RESET:
      draft.count = 0;
      break;
    default:
      draft.count;
    }
  });

export default counter;