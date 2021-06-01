import { takeEvery, all, call, put } from 'redux-saga/effects';
import { GET_PROFILE } from './types';
import { profileSuccess, profileFailed } from './action';
import { API } from '@/utils/constants';
import {request}  from '@/utils/request';

function* getProfileSaga(action) {
  try{
    const data = yield call(request, API.AUTH_USER_PROFILE, {
      method: "GET",
      headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmV5bWFyayBWaWN0b3Jpbm8iLCJpZCI6IjYwYjVjZDhkYjQ0YjY4MDAyMDdjMWYzOCIsImVtYWlsIjoidmljdG9yaW5vcmV5bWFya0BnbWFpbC5jb20iLCJpYXQiOjE2MjI1MzEzODMsImV4cCI6MTYyMjU1NjU4M30.orc1OVzbF6fY873KTjC3nS_jUAox8g4fz95na4m7dHM',
        'Content-Type': 'application/json'   },
      body: JSON.stringify(action.payload)
    });
    yield put(profileSuccess(data));
    console.log(data);
  } catch(error){
    yield put(profileFailed(error.message));
  }
}

function* getProfileWatcher() {
  yield takeEvery(GET_PROFILE, getProfileSaga);
}

export default function* profileSaga() {
  yield all([getProfileWatcher()]);
}