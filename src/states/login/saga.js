import Router from 'next/router';
import { takeEvery, call, put } from 'redux-saga/effects';
import {
  API,
  POST_REQUEST,
  WEBINAR_ROUTE,
  LOADING_PREFIX,
} from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import Cookie from '@/lib/cookie';
import { setLogin } from './action';
import { LOGIN } from './types';

function* authenticateSaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.LOGIN));
    const response = yield call(
      request,
      API.AUTH_LOGIN,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    yield put(setLogin(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.LOGIN));
    Cookie.saveAuth(response);
    Router.push(WEBINAR_ROUTE.LIST_WEBINAR);
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.LOGIN, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.LOGIN, false));
  }
}

export default function* loginSaga() {
  yield takeEvery(LOGIN, authenticateSaga);
}
