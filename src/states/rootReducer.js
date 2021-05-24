import { combineReducers } from 'redux';
import counter from '@/states/counter/reducer';
import atendee from '@/states/attendees/reducer';
import profile from '@/states/profiles/reducer';
import plans from '@/states/plans/reducer';
import webinar from '@/states/webinar/reducer';

const rootReducer = combineReducers({
  counter,
  atendee,
  profile,
  plans,
  webinar,
});

export default rootReducer;