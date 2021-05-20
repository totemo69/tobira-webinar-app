import { all } from 'redux-saga/effects';
import attendeeSaga from '../states/attendees/saga';

function* rootSaga() {
  yield all([attendeeSaga()]);
}

export default rootSaga;