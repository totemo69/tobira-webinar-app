import produce from 'immer';
import { GET_ATENDEE, GET_ATENDEE_SUCCESS} from './types';


export const initialState = {
  isLoading: false,
  content: [],
  error: null,
};

const atendeeCheck = (state = initialState, action) => 
  produce(state, draft => {
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
        content: draft
      };
    default:
      return state;
    }
  });
  
 


export default atendeeCheck;