import { takeEvery, all, call, put } from 'redux-saga/effects';
import { PLANS_COUNT } from './types';
import { plansSuccess, plansFailed } from './action';
import { API } from '@/utils/constants';
import {request}  from '@/utils/request';

function* getPlanSaga() {
  try{
    const data = yield call(request, API.AUTH_PLANS_COUNT);
    yield put(plansSuccess(data));
    console.log(data);
  } catch(error){
    yield put(plansFailed(error.message));
  }
}

function* getPlanWatcher() {
  yield takeEvery(PLANS_COUNT, getPlanSaga);
}

export default function* planSaga() {
  yield all([getPlanWatcher()]);
}