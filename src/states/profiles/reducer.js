import produce from 'immer';
import {
  GET_PROFILE,
  PROFILE_SUCCESS,
} from './types';

const initialState = {
  isLoading: false,
  content: [],
  error: null,
};

const testProfile = (state = initialState, { type, payload }) => 
  produce(state, draft => {
    switch (type) {
    case GET_PROFILE:
      draft.isLoading = true;
      break;
    case PROFILE_SUCCESS:
      draft.isLoading = false;
      draft.content = payload;
      break;
    default:
      draft;
    }
  });

export default testProfile;