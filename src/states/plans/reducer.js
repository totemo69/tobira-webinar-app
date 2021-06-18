import produce from 'immer';
import { PLANS_GET, PLANS_COUNT, PLANS_SUCCESS } from './types';

const initialState = {
  isLoading: false,
  content: [],
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const testPlans = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case PLANS_GET:
        draft.isLoading = true;
        break;
      case PLANS_COUNT:
        draft.isLoading = true;
        break;
      case PLANS_SUCCESS:
        draft.isLoading = false;
        draft.content = payload;
        break;
    }
  });

export default testPlans;
