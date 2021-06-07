import produce from 'immer';
import {
  AUTH_LOGIN_USER,
  AUTH_LOGIN_SUCCESS
} from './types';

export const initialState = {
  isLoading: false,
  login: [],
  error: null,
  isLoggedIn: false,
};

const authenticate = (state = initialState, { type, payload }) => 
  produce(state, draft => {
    switch (type) {
    case AUTH_LOGIN_USER:
      draft.isLoading = true;
      break;
    case AUTH_LOGIN_SUCCESS: {
      draft.isLoading = false;
      draft.login = payload;
      draft.isLoggedIn = true;
      break;
    }
    default:
      draft;
    }
  });

export default authenticate;