import { all } from 'redux-saga/effects';
import attendeeSaga from '@/states/attendees/saga';
import profileSaga from '@/states/profiles/saga';
import planSaga from '@/states/plans/saga';
import paymentSaga from '@/states/payments/saga';
import webinarSaga from '@/states/webinar/saga';
import loginSaga from '@/states/login/saga';
import signupSaga from '@/states/sign-up/saga';
import accountSaga from '@/states/accounts/saga';
import walletSaga from '@/states/wallet/saga';

function* rootSaga() {
  yield all([
    attendeeSaga(),
    profileSaga(),
    planSaga(),
    paymentSaga(),
    webinarSaga(),
    loginSaga(),
    signupSaga(),
    accountSaga(),
    walletSaga(),
  ]);
}

export default rootSaga;
