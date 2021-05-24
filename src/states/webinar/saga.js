import { takeEvery, call, all, put  } from 'redux-saga/effects';
import { GET_WEBINAR } from './types';
import { getWebinarSuccess, getWebinarFailed } from './action';
import { API } from '@/utils/constants';
import request from '@/utils/request';

function* getWebinarSaga(){
  try{
    const data = yield call(request,API.AUTH_WEBINAR);
    yield put(getWebinarSuccess(data));
  } catch(error){
    yield put(getWebinarFailed(error.message));
  }
}

function* getWebinarWatcher(){
  yield takeEvery(GET_WEBINAR, getWebinarSaga);
}

export default function* webinarSaga(){
  yield all([getWebinarWatcher()]);
}