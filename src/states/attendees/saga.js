import { takeEvery, all, call, put} from 'redux-saga/effects';
import { GET_ATENDEE, GET_ATENDEE_COUNT } from './types';
import {getAttendeeSuccess, getAttendeeFailed, getAttendeeCountSuccess, getAttendeeCountFailed} from './action';
import { API } from '@/utils/constants';
import request  from '@/utils/request';

function* getAttendeeSaga() {
  try{
    const data = yield call(request,API.AUTH_ATTENDEE);
    yield put(getAttendeeSuccess(data));
    console.log(data);
  } catch(error){
    yield put(getAttendeeFailed(error.message));
  }
}

function* getAttendeeCountSaga(){
  try {
    const data = yield call(request, API.AUTH_ATTENDEE_COUNT);
    yield put(getAttendeeCountSuccess(data));
  } catch(error) {
    yield put(getAttendeeCountFailed(error.message));
  }
}

function* getAttendeeCountWather() {
  yield takeEvery(GET_ATENDEE_COUNT, getAttendeeCountSaga);
}

function* getAttendeeWatcher() {
  yield takeEvery(GET_ATENDEE, getAttendeeSaga);
}

export default function* attendeeSaga() {
  yield all([getAttendeeWatcher(), getAttendeeCountWather()]);
}