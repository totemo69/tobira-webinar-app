import produce from 'immer';
import { SET_WEBINAR_LIST } from './types';

export const initialState = {
  webinarList: [],
};


const webinarReducer = (state = initialState, action) => 
  produce(state, draft =>
  {
    switch(action.type) {
    case SET_WEBINAR_LIST: {
      draft.webinarList = action.payload;
      break;
    }
    }
  });

export default webinarReducer;