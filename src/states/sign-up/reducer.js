import produce from 'immer';
import {
  POST_SIGNUP,
  POST_SIGNUP_SUCCESS,
} from './type';

export const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};


const fetchSingup = (state = initialState, action) => 
  produce(state, payload => {
    switch(action.type) {
    case POST_SIGNUP:
      return{
        ...state,
        isLoading: true,
      };
    case POST_SIGNUP_SUCCESS:
      return{
        ...state,
        isLoading: false,
        posts: payload
      };
    default: 
      return state;
    }
  });

export default fetchSingup;

