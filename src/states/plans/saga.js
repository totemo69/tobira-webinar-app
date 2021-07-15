import { takeEvery, call, put } from 'redux-saga/effects';
import { API, GET_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import { PLANS_GET } from './types';
import { setPlans } from './action';

function* getPlanSaga() {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.PLAN));
    const data = yield call(
      request,
      API.AUTH_PLANS_GET,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setPlans(data));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.PLAN));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.PLAN, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.PLAN, false));
  }
}

export default function* planSaga() {
  yield takeEvery(PLANS_GET, getPlanSaga);
}
