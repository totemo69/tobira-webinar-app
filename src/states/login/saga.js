import { takeEvery, all, call, put } from 'redux-saga/effects';
import { AUTH_LOGIN_USER } from './types';
import { loginSuccess, loginFailed } from './action';
import { API } from '@/utils/constants';
import { request }  from '@/utils/request';

function* authenticateSaga(action) {
  try{
    const data = yield call(request, API.AUTH_LOGIN, {
      method: 'POST',
      headers: { 'Authorized' : `Bearer`,
        'Content-type': 'application/json' },
      body: JSON.stringify(action.payload),
    });
    yield put(loginSuccess(data));
    console.log(data);
  } catch(error){
    yield put(loginFailed(error.message));
  }
}

function* authenticateSagaWatcher() {
  yield takeEvery(AUTH_LOGIN_USER, authenticateSaga);
}

export default function* loginSaga() {
  yield all([authenticateSagaWatcher()]);
}