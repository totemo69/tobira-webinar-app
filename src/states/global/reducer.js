import produce from 'immer';
import {
  LOAD_ERRORS,
  CLEAR_ERRORS,
  LOADING,
} from './types';


export const initialState = {
  error: false,
  loading: {},
};

const globalReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
    case LOAD_ERRORS:
      draft.error = action.error;
      break;
    case CLEAR_ERRORS:
      draft.error = false;
      break;
    case LOADING:
      draft.loading[action.key] = action.isLoading;
      break;
    }
  });

export default globalReducer;