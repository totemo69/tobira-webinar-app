import {takeEvery, call, put, takeLatest } from 'redux-saga/effects';
import { GET_ZOOM_ACCOUNT, SUBMIT_ZOOM_CODE } from './types';
import { setZoomAccountList, setZoomAccount } from './actions';
import { API, POST_REQUEST, GET_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors } from '@/states/global/actions';

function* zoomAccountSaga(){
  try{
    const response = yield call(
      request,
      API.AUTH_ZOOM_ACCOUNT,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setZoomAccountList(response));
  }
  catch(error){
    yield put(loadErrors(error));
  } finally{
    yield put(loading(LOADING_PREFIX.ACCOUNT, false));
  }
}

function* submitZoomCode({ payload }){
  try{
    yield put(loading(LOADING_PREFIX.ACCOUNT));
    const response = yield call(
      request,
      API.AUTH_ZOOM_ACCOUNT,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    yield put(setZoomAccount(response));
  }
  catch(error){
    yield put(loadErrors(error));
  } finally{
    yield put(loading(LOADING_PREFIX.ACCOUNT, false));
  }
}

export default function* AccountSaga() {
  yield takeEvery(GET_ZOOM_ACCOUNT, zoomAccountSaga);
  yield takeLatest(SUBMIT_ZOOM_CODE, submitZoomCode);
}
