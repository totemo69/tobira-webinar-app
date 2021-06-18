import { takeEvery, all, call, put } from 'redux-saga/effects';
import { API } from '@/utils/constants';
import { request } from '@/utils/request';
import { PLANS_COUNT, PLANS_GET } from './types';
import { plansSuccess, plansFailed } from './action';

function* getPlanSaga() {
  try {
    const data = yield call(request, API.AUTH_PLANS_GET);
    yield put(plansSuccess(data));
    console.log(data);
  } catch (error) {
    yield put(plansFailed(error.message));
  }
}

function* getPlansCountSaga() {
  try {
    const data = yield call(request, API.AUTH_PLANS_COUNT);
    yield put(plansSuccess(data));
    console.log(data);
  } catch (error) {
    yield put(plansFailed(error.message));
  }
}

function* getPlanWatcher() {
  yield takeEvery(PLANS_GET, getPlanSaga);
  yield takeEvery(PLANS_COUNT, getPlansCountSaga);
}

export default function* planSaga() {
  yield all([getPlanWatcher()]);
}
