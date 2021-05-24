import { takeEvery, all, call, put} from 'redux-saga/effects';
import { GET_ATENDEE } from './types';
import {getAttendeeSuccess, getAttendeeFailed} from './action';
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

function* getAttendeeWatcher() {
  yield takeEvery(GET_ATENDEE, getAttendeeSaga);
}

export default function* attendeeSaga() {
  yield all([getAttendeeWatcher()]);
}