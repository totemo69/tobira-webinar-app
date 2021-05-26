import { all } from 'redux-saga/effects';
import attendeeSaga from '@/states/attendees/saga';
import profileSaga from '@/states/profiles/saga';
import planSaga from '@/states/plans/saga';
import paymentSaga from '@/states/payments/saga';
import webinarSaga from '@/states/webinar/saga';
import singupSaga from '@/states/sign-up/saga';

function* rootSaga() {
  yield all([
    attendeeSaga(),
    profileSaga(),
    planSaga(),
    paymentSaga(),
    webinarSaga(),
    singupSaga(),
  ]);
}

export default rootSaga;