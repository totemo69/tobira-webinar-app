import { takeEvery, all, call, put,takeLatest} from 'redux-saga/effects';
import { GET_ATENDEE, GET_ATENDEE_COUNT, ADD_ATTENDEE } from './types';
import {getAttendeeSuccess, getAttendeeFailed, getAttendeeCountSuccess, getAttendeeCountFailed,
  addAtendeeSuccess, addAtendeeFailed} from './action';
import { API } from '@/utils/constants';
import {request , addData}  from '@/utils/request';

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

function* addAttendeeSaga(action) {
  try{
    const data = yield call(addData, API.AUTH_ATTENDEE, action.payload);
    yield put(addAtendeeSuccess({...data,...action.payload}));
    console.log(data);
  } catch(error){
    yield put(addAtendeeFailed(error.message));
  }
}


function* addAtendeeWatcher() {
  yield takeLatest(ADD_ATTENDEE, addAttendeeSaga);
}

export default function* attendeeSaga() {
  yield all([getAttendeeWatcher(), getAttendeeCountWather(), addAtendeeWatcher()]);
}