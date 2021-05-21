import { combineReducers } from 'redux';
import counter from './counter/reducer';
import attendee from './attendees/reducer';
import users from './users/reducer';

const rootReducer = combineReducers({
  counter,
  attendee,
  users,
});

export default rootReducer;