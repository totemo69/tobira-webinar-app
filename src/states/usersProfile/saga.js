import { takeEvery, all, call, put } from 'redux-saga/effects';
import { GET_USER_PROFILE } from './types';
import { getUserProfileSuccess, getUserProfileFailed } from './action';
import { API } from '../../utils/constants';
import request  from '../../utils/request';

function* getUserProfileSaga() {
  try{
    const data = yield call(request, API.AUTH_USER_PROFILE);
    yield put(getUserProfileSuccess(data));
    console.log(data);
  } catch(error){
    yield put(getUserProfileFailed(error.message));
  }
}

function* getUserProfileWatcher() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}

export default function* userProfileSaga() {
  yield all([getUserProfileWatcher()]);
}