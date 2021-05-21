import { GET_USER, GET_USER_SUCCESS } from './types';

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const userCheck = (state = initialState, {type, payload}) => {
  switch(type) {
  case GET_USER:
    return{
      ...state,
      isLoading: true,
    };
  case GET_USER_SUCCESS:
    return {
      ...state,
      isLoading: false,
      posts: payload,
    };
  default:
    return state;
  }
};

export default userCheck;