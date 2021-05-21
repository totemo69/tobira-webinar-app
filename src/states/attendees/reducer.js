import produce from 'immer';
import { GET_ATENDEE, GET_ATENDEE_SUCCESS } from './types';


export const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const atendeeCheck = (state = initialState, action) => 
  produce(state, payload => {
    switch(action.type) {
    case GET_ATENDEE:
      return{
        ...state,
        isLoading: true,
      };
    case GET_ATENDEE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: payload,
      };
    default:
      return state;
    }
  });
  
 


export default atendeeCheck;