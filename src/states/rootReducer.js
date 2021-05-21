import { combineReducers } from 'redux';
import counter from './counter/reducer';
import atendee from './attendees/reducer';
import profile from './profiles/reducer';

const rootReducer = combineReducers({
  counter,
  atendee,
  profile,
});

export default rootReducer;