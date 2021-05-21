import { all } from 'redux-saga/effects';
import attendeeSaga from '../states/attendees/saga';
import profileSaga from './profiles/saga';

function* rootSaga() {
  yield all([
    attendeeSaga(),
    profileSaga()
  ]);
}

export default rootSaga;