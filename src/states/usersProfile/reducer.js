import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS } from './types';

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const userProfileCheck = (state = initialState, {type, payload}) => {
  switch(type) {
  case GET_USER_PROFILE:
    return{
      ...state,
      isLoading: true,
    };
  case GET_USER_PROFILE_SUCCESS:
    return {
      ...state,
      isLoading: false,
      posts: payload,
    };
  default:
    return state;
  }
};

export default userProfileCheck;