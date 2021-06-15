import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_WEBINAR_LIST } from './types';
import { setWebinarList } from './actions';
import { API, GET_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors } from '@/states/global/actions';

function* webinarList(){
  try {
    yield put(loading(LOADING_PREFIX.LIST_WEBINAR));
    const response = yield call(
      request,
      API.WEBINARS,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setWebinarList(response));
  }
  catch(error){
    yield put(loadErrors(error));
  } finally{
    yield put(loading(LOADING_PREFIX.LIST_WEBINAR, false));
  }
}

export default function* webinarSaga(){
  yield takeLatest(GET_WEBINAR_LIST, webinarList);
}