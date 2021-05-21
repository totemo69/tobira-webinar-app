import { all } from 'redux-saga/effects';
import attendeeSaga from '../states/attendees/saga';
import userSaga from '../states/users/saga';

function* rootSaga() {
  yield all([
    attendeeSaga(),
    userSaga()
  ]);
}

export default rootSaga;