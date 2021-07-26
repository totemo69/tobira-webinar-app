import produce from 'immer';
import { SET_PASSWORD } from './types';

export const initialState = {
  forgotpassword: {},
};

/* eslint-disable default-case, no-param-reassign */
const forgotPassword = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case SET_PASSWORD: {
        draft.forgotpassword = payload;
        break;
      }
    }
  });

export default forgotPassword;
