import produce from 'immer';
import { GET_ATENDEE, GET_ATENDEE_SUCCESS, GET_ATENDEE_COUNT, GET_ATENDEE_COUNT_SUCCESS } from './types';


export const initialState = {
  isLoading: false,
  content: [],
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
        content: payload
      };
    case GET_ATENDEE_COUNT: 
      return {
        ...state,
        isLoading: true,
      };
    case GET_ATENDEE_COUNT_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        count: payload
      };
    default:
      return state;
    }
  });
  
 


export default atendeeCheck;