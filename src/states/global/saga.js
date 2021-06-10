import {takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { GET_ZOOM_ACCOUNT, SUBMIT_ZOOM_CODE } from './types';
import { getZoomAccountSuccess,getZoomAccountFailed  } from './actions';
import { API, POST_REQUEST, GET_REQUEST } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';

function* zoomAccountSaga(){
  try{
    const response = yield call(
      request,
      API.AUTH_ZOOM_ACCOUNT,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(getZoomAccountSuccess(response));
  }
  catch(error){
    yield put(getZoomAccountFailed(error.message));
  }
}

function* submitZoomCode({ payload }){
  try{
    console.log(payload);
    const response = yield call(
      request,
      API.AUTH_ZOOM_ACCOUNT,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    console.log(response);
    yield put(getZoomAccountSuccess(response));

  }
  catch(error){
    console.log(error);
    yield put(getZoomAccountFailed(error));
  }
}


export default function* AccountSaga() {
  yield takeEvery(GET_ZOOM_ACCOUNT, zoomAccountSaga);
  yield takeLatest(SUBMIT_ZOOM_CODE, submitZoomCode);
}
