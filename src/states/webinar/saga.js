import { call, put, takeLatest } from 'redux-saga/effects';
import {
  API,
  GET_REQUEST,
  POST_REQUEST,
  LOADING_PREFIX,
} from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import { setWebinarList, setWebinarDetails } from './actions';
import { GET_WEBINAR_LIST, CREATE_WEBINAR } from './types';

function* webinarList() {
  try {
    yield put(loading(LOADING_PREFIX.LIST_WEBINAR));
    const response = yield call(
      request,
      API.WEBINARS,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setWebinarList(response));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.LIST_WEBINAR, false));
  }
}

function* createWebinar({ payload }) {
  try {
    yield put(loading(LOADING_PREFIX.CREATE_WEBINAR));
    const response = yield call(
      request,
      API.WEBINARS,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    yield put(setWebinarDetails(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.CREATE_WEBINAR));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.CREATE_WEBINAR, false));
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.CREATE_WEBINAR, false));
  }
}

export default function* webinarSaga() {
  yield takeLatest(GET_WEBINAR_LIST, webinarList);
  yield takeLatest(CREATE_WEBINAR, createWebinar);
}
