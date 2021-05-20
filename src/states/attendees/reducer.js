import { GET_ATENDEE, GET_ATENDEE_SUCCESS } from './action';


const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};

const atendeeCheck = (state = initialState, {type, payload}) => {
  switch(type) {
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
 
};

export default atendeeCheck;