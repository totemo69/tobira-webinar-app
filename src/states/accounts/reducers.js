import produce from 'immer';
import {
  GET_ZOOM_ACCOUNT,
  GET_ZOOM_ACCOUNT_SUCCESS,
} from './types';


const initialState = {
  isLoading: false,
  posts: [],
  error: null,

};

const zoomAccountCheck = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
    case GET_ZOOM_ACCOUNT:
      return {
        ...state,
        isLoading: true,
      };
    case GET_ZOOM_ACCOUNT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        payload: draft,
      };
    default:
      return state;
    }
  });


export default zoomAccountCheck;