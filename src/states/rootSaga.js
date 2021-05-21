import { all } from 'redux-saga/effects';
import attendeeSaga from '@/states/attendees/saga';
import profileSaga from '@/states/profiles/saga';
import planSaga from '@/states/plans/saga';

function* rootSaga() {
  yield all([
    attendeeSaga(),
    profileSaga(),
    planSaga()
  ]);
}

export default rootSaga;