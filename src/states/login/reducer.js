import produce from 'immer';
import {
  AUTH_LOGIN_USER,
  AUTH_LOGIN_SUCCESS
} from './types';

const initialState = {
  isLoading: false,
  content: [],
  error: null,
};

const authenticate = (state = initialState, { type, payload }) => 
  produce(state, draft => {
    switch (type) {
    case AUTH_LOGIN_USER:
      draft.isLoading = true;
      break;
    case AUTH_LOGIN_SUCCESS:
      draft.isLoading = false;
      draft.content = payload;
      break;
    default:
      draft;
    }
  });

export default authenticate;