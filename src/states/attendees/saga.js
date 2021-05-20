import { takeEvery, all, call, put} from 'redux-saga/effects';
import { GET_ATENDEE,getAttendeeSuccess, getAttendeeFailed } from './action';
import { getAttendees } from '../../pages/api/hello';


function* getAttendeeSaga() {
  try{
    const data = yield call(getAttendees);
    yield put(getAttendeeSuccess(data));
    console.log(data);
  } catch(error){
    yield put(getAttendeeFailed(error.message));
  }
}

function* getAttendeeWatcher() {
  yield takeEvery(GET_ATENDEE, getAttendeeSaga);
}

export default function* attendeeSaga() {
  yield all([getAttendeeWatcher()]);
}