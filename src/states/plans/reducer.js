import produce from 'immer';
import { PLANS_SET } from './types';

export const initialState = {
  planList: [],
};

/* eslint-disable default-case, no-param-reassign */
const testPlans = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case PLANS_SET: {
        draft.planList = payload;
        break;
      }
    }
  });

export default testPlans;
