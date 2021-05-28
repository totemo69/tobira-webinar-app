import { takeEvery, all, call, put } from 'redux-saga/effects';
import { GET_PROFILE } from './types';
import { profileSuccess, profileFailed } from './action';
import { API } from '@/utils/constants';
import {request}  from '@/utils/request';

function* getProfileSaga() {
  try{
    const data = yield call(request, API.AUTH_USER_PROFILE, {
      method: "GET",
      headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiUmV5bWFyayBWaWN0b3Jpbm8iLCJpZCI6IjYwYWY0MzBjMTM4NDZkMDAyMGRiN2MwZiIsImVtYWlsIjoidmljdG9yaW5vcmV5bWFyMTk5MGtAZ21haWwuY29tIiwiaWF0IjoxNjIyMDk4NzYwLCJleHAiOjE2MjIxMjM5NjB9.1rS69GLhAj25q4-k1pjljqWdWz8Xzh50VdoLCS7U7J4',
        'Content-Type': 'application/json'   }
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