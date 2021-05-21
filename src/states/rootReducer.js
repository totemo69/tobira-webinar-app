import { combineReducers } from 'redux';
import counter from './counter/reducer';
import atendee from './attendees/reducer';
import usersProfile from './usersProfile/reducer';

const rootReducer = combineReducers({
  counter,
  atendee,
  usersProfile,
});

export default rootReducer;