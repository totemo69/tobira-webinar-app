import produce from 'immer';
import { GET_WEBINAR, GET_WEBINAR_SUCCESS } from './types';

export const initialState = {
  isLoading: false,
  posts: [],
  error: null,
};


const checkWebinar = (state = initialState, action) => 
  produce(state, payload =>
  {
    switch(action.type) {
    case GET_WEBINAR :
      return {
        ...state,
        isLoading: true,
      };
    case GET_WEBINAR_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    default:
      return state;
    }
  });


export default checkWebinar;