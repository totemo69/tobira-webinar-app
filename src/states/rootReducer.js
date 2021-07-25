import { combineReducers } from 'redux';
import global from '@/states/global/reducer';
import attendees from '@/states/attendees/reducer';
import profile from '@/states/profiles/reducer';
import plans from '@/states/plans/reducer';
import payments from '@/states/payments/reducer';
import webinar from '@/states/webinar/reducer';
import login from '@/states/login/reducer';
import signup from '@/states/sign-up/reducer';
import accounts from '@/states/accounts/reducer';
import wallet from '@/states/wallet/reducer';
import transaction from '@/states/transaction/reducer';

const rootReducer = combineReducers({
  global,
  attendees,
  profile,
  plans,
  payments,
  webinar,
  login,
  signup,
  accounts,
  wallet,
  transaction,
});

export default rootReducer;
