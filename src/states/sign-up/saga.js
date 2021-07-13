import { takeLatest, call, put } from 'redux-saga/effects';
import { API, POST_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import { SIGNUP, VERIFY } from './type';

function* registerSaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.SIGNUP));
    yield call(
      request,
      API.AUTH_REGISTER,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.SIGNUP));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.SIGNUP, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.SIGNUP, false));
  }
}

function* verifySaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.VERIFICATION));
    yield call(
      request,
      API.AUTH_VERIFY,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.VERIFICATION));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.VERIFICATION, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.VERIFICATION, false));
  }
}

export default function* sigunUpSage() {
  yield takeLatest(SIGNUP, registerSaga);
  yield takeLatest(VERIFY, verifySaga);
}
