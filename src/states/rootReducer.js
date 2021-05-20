import { combineReducers } from 'redux';
import counter from './counter/reducer';
import atendee from './attendees/reducer';

const rootReducer = combineReducers({
  counter,
  atendee,
});

export default rootReducer;