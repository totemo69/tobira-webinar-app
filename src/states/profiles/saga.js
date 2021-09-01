import { takeLatest, call, put } from 'redux-saga/effects';
import {
  API,
  PATCH_REQUEST,
  GET_REQUEST,
  LOADING_PREFIX,
} from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import { setProfile } from './action';
import { GET_PROFILE, UPDATE_PROFILE, UPDATE_CREDENTIALS } from './types';

function* getProfileSaga() {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.GET_PROFILE));
    const response = yield call(
      request,
      API.AUTH_USER_PROFILE,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setProfile(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.GET_PROFILE));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.GET_PROFILE, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.GET_PROFILE, false));
  }
}

function* updateProfileSaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.UPDATE_PROFILE));
    const response = yield call(
      request,
      API.AUTH_USER_PROFILE,
      RequestOptions(PATCH_REQUEST, { ...payload }, true),
    );
    yield put(setProfile(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.UPDATE_PROFILE));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.UPDATE_PROFILE, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.UPDATE_PROFILE, false));
  }
}

function* updateCredentialsSaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.UPDATE_PROFILE));
    yield call(
      request,
      API.USER_CREDENTIALS,
      RequestOptions(PATCH_REQUEST, { ...payload }, true),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.UPDATE_PROFILE));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.UPDATE_PROFILE, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.UPDATE_PROFILE, false));
  }
}

export default function* profileSaga() {
  yield takeLatest(GET_PROFILE, getProfileSaga);
  yield takeLatest(UPDATE_PROFILE, updateProfileSaga);
  yield takeLatest(UPDATE_CREDENTIALS, updateCredentialsSaga);
}
