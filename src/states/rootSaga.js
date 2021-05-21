import { all } from 'redux-saga/effects';
import attendeeSaga from '../states/attendees/saga';
import userProfileSaga from './usersProfile/saga';

function* rootSaga() {
  yield all([
    attendeeSaga(),
    userProfileSaga()
  ]);
}

export default rootSaga;