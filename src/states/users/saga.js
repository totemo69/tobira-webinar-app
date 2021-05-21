import { takeEvery, all, call, put } from 'redux-saga/effects';
import { GET_USER } from './types';
import { getUserSuccess, getUserFailed } from './action';
import { API } from '../../utils/constants';
import request  from '../../utils/request';

function* getUserSaga() {
  try{
    const data = yield call(request, API.AUTH_USER);
    yield put(getUserSuccess(data));
    console.log(data);
  } catch(error){
    yield put(getUserFailed(error.message));
  }
}

function* getUserWatcher() {
  yield takeEvery(GET_USER, getUserSaga);
}

export default function* userSaga() {
  yield all([getUserWatcher()]);
}