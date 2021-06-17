import Router from 'next/router';
import { takeEvery, call, put } from 'redux-saga/effects';
import { AUTH_LOGIN_USER } from './types';
import { loginSuccess, loginFailed } from './action';
import { API, POST_REQUEST, WEBINAR_ROUTE } from '@/utils/constants';
import { request, RequestOptions }  from '@/utils/request';
import Cookie from '@/lib/cookie';

function* authenticateSaga({ payload, errCallback }) {
  try{
    const response = yield call(
      request,
      API.AUTH_LOGIN,
      RequestOptions(POST_REQUEST, { ...payload }, false),
    );
    yield put(loginSuccess(response));
    Cookie.saveAuth(response);
    Router.push(WEBINAR_ROUTE.LIST_WEBINAR);
  } catch(error){
    errCallback(error);
    yield put(loginFailed(error.message));
  }
}

export default function* loginSaga() {
  yield takeEvery(AUTH_LOGIN_USER, authenticateSaga);
}