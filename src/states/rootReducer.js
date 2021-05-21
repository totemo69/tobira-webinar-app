import { combineReducers } from 'redux';
import counter from './counter/reducer';
import atendee from './attendees/reducer';
import users from './users/reducer';

const rootReducer = combineReducers({
  counter,
  atendee,
  users,
});

export default rootReducer;