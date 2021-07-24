import produce from 'immer';
import { SET_LOGIN } from './types';

export const initialState = {
  login: [],
  isLoggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const authenticate = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case SET_LOGIN: {
        draft.login = payload;
        draft.isLoggedIn = true;
        break;
      }
    }
  });

export default authenticate;
