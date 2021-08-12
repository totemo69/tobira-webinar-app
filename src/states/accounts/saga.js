import { takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import {
  API,
  POST_REQUEST,
  GET_REQUEST,
  LOADING_PREFIX,
} from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors } from '@/states/global/actions';
import { setZoomAccountList, setZoomAccount } from './actions';
import {
  GET_ZOOM_ACCOUNT,
  SUBMIT_ZOOM_CODE,
  CREATE_ZOOM_ACCOUNT,
} from './types';

function* zoomAccountSaga() {
  try {
    yield put(loading(LOADING_PREFIX.ACCOUNT));
    const response = yield call(
      request,
      API.ZOOM_ACCOUNT,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setZoomAccountList(response));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.ACCOUNT, false));
  }
}

function* submitZoomCode({ payload }) {
  try {
    yield put(loading(LOADING_PREFIX.ACCOUNT));
    const response = yield call(
      request,
      API.ZOOM_ACCOUNT,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    yield put(setZoomAccount(response));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.ACCOUNT, false));
  }
}

function* createZoomAccount({ successCallback, errCallback }) {
  try {
    yield put(loading(LOADING_PREFIX.ACCOUNT));
    yield call(
      request,
      `${API.ZOOM_ACCOUNT}/create-user`,
      RequestOptions(POST_REQUEST, null, true),
    );
    if (successCallback) {
      successCallback();
    }
  } catch (error) {
    yield put(loadErrors(error));
    errCallback();
  } finally {
    yield put(loading(LOADING_PREFIX.ACCOUNT, false));
  }
}

export default function* AccountSaga() {
  yield takeEvery(GET_ZOOM_ACCOUNT, zoomAccountSaga);
  yield takeLatest(SUBMIT_ZOOM_CODE, submitZoomCode);
  yield takeLatest(CREATE_ZOOM_ACCOUNT, createZoomAccount);
}
