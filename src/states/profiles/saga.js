import { takeLatest, call, put } from 'redux-saga/effects';
import { GET_PROFILE, UPDATE_PROFILE } from './types';
import { setProfile } from './action';
import { API, PATCH_REQUEST, GET_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';

function* getProfileSaga() {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.PROFILE));
    const response = yield call(
      request,
      API.AUTH_USER_PROFILE,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setProfile(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.PROFILE));
  }
  catch(error){
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.PROFILE, false));
    // Set the error
    yield put(loadErrors(error));
  } finally{
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.PROFILE, false));
  }
}

function* updateProfileSaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.PROFILE));
    const response = yield call(
      request,
      API.AUTH_USER_PROFILE,
      RequestOptions(PATCH_REQUEST, { ...payload }, true),
    );
    yield put(setProfile(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.PROFILE));
  }
  catch(error){
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.PROFILE, false));
    // Set the error
    yield put(loadErrors(error));
  } finally{
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.PROFILE, false));
  }
}

export default function* profileSaga() {
  yield takeLatest(GET_PROFILE, getProfileSaga);
  yield takeLatest(UPDATE_PROFILE, updateProfileSaga);
}