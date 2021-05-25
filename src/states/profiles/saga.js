import { takeEvery, all, call, put } from 'redux-saga/effects';
import { GET_PROFILE } from './types';
import { profileSuccess, profileFailed } from './action';
import { API } from '@/utils/constants';
import {request}  from '@/utils/request';

function* getProfileSaga() {
  try{
    const data = yield call(request, API.AUTH_USER_PROFILE);
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