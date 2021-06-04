import { combineReducers } from 'redux';
import counter from '@/states/counter/reducer';
import atendee from '@/states/attendees/reducer';
import profile from '@/states/profiles/reducer';
import plans from '@/states/plans/reducer';
import payments from '@/states/payments/reducer';
import webinar from '@/states/webinar/reducer';
import login from '@/states/login/reducer';
import signup from '@/states/sign-up/reducer';
import account from '@/states/accounts/reducers';

const rootReducer = combineReducers({
  counter,
  atendee,
  profile,
  plans,
  payments,
  webinar,
  login,
  signup,
  account,
});

export default rootReducer;