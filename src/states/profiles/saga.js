import { takeEvery, all, call, put } from 'redux-saga/effects';
import { GET_PROFILE } from './types';
import { profileSuccess, profileFailed } from './action';
import { API } from '@/utils/constants';
import {request}  from '@/utils/request';

function* getProfileSaga(action) {
  try{
    const data = yield call(request, API.AUTH_USER_PROFILE, {
      method: "POST",
      headers: { 'Authorization': 'Bearer',
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