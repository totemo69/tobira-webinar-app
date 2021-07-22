import produce from 'immer';
import { SET_PROFILE } from './types';

export const initialState = {
  profileDetails: {},
};

/* eslint-disable default-case, no-param-reassign */
const profile = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_PROFILE: {
        draft.profileDetails = action.payload;
        break;
      }
    }
  });

export default profile;
