import produce from 'immer';
import {
  GET_PROFILE,
  PROFILE_SUCCESS,
} from './types';

export const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const testProfile = (state = initialState, action) => 
  produce(state, draft => {
    switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        isLoading: true,
      };
    case PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: draft.payload
      };
    default:
      return state;
    }
  });

export default testProfile;