import { takeLatest, call, put } from 'redux-saga/effects';
import { API, POST_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import { FORGOT_PASSWORD, RESET_PASSWORD } from './types';

function* forgotSaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.FORGOT_PASSWORD));
    yield call(
      request,
      API.AUTH_FORGOT,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.FORGOT_PASSWORD));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.FORGOT_PASSWORD, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.FORGOT_PASSWORD, false));
  }
}

function* resetSaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.FORGOT_PASSWORD));
    yield call(
      request,
      API.AUTH_RESET,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.FORGOT_PASSWORD));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.FORGOT_PASSWORD, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.FORGOT_PASSWORD, false));
  }
}

export default function* sigunUpSage() {
  yield takeLatest(FORGOT_PASSWORD, forgotSaga);
  yield takeLatest(RESET_PASSWORD, resetSaga);
}
