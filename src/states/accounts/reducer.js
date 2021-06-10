import produce from 'immer';
import {
  SET_ZOOM_ACCOUNT,
  SET_ZOOM_ACCOUNT_LIST
} from './types';


export const initialState = {
  zoomAccount: {},
  zoomAccountList: [],
};

const accountReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch(action.type) {
    case SET_ZOOM_ACCOUNT: {
      draft.zoomAccount = action.payload;
      break;
    }
    case SET_ZOOM_ACCOUNT_LIST:
    {
      draft.zoomAccountList = action.payload;
      break;
    }
    default:
      draft;
    }
  });


export default accountReducer;