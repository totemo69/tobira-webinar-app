import { call, put, takeLatest, select } from 'redux-saga/effects';
import {
  API,
  GET_REQUEST,
  POST_REQUEST,
  DELETE_REQUEST,
  PATCH_REQUEST,
  LOADING_PREFIX,
} from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import {
  GET_BANK_LIST,
  ADD_BANK,
  REMOVE_BANK,
  UPDATE_BANK,
  WITHDRAWS,
} from './types';
import { setBankList } from './actions';
import { makeSelectWithdraw } from './selector';

function* doGetBankList() {
  try {
    yield put(loading(LOADING_PREFIX.WALLET));
    const response = yield call(
      request,
      `${API.BANKS}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setBankList(response));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.WALLET, false));
  }
}

function* doAddBank({ payload }) {
  try {
    yield call(
      request,
      `${API.BANKS}`,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    yield put(loadSuccess(LOADING_PREFIX.WALLET));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.WALLET, false));
  }
}

function* doUpdateBank({ payload }) {
  const id = '60f8159872d7c30020e533af';
  try {
    yield call(
      request,
      `${API.BANKS}/${id}`,
      RequestOptions(PATCH_REQUEST, { ...payload }, true),
    );
    yield put(loadSuccess(LOADING_PREFIX.WALLET));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.WALLET, false));
  }
}

function* doRemoveBank({ id, onCallback }) {
  try {
    yield call(
      request,
      `${API.BANKS}/${id}`,
      RequestOptions(DELETE_REQUEST, {}, true),
    );
    if (onCallback) {
      onCallback(true);
    }
  } catch (error) {
    yield put(loadErrors(error));
    onCallback(false);
  }
}

function* doWithdraw() {
  try {
    yield put(loading(LOADING_PREFIX.WALLET));
    const payload = yield select(makeSelectWithdraw());
    yield call(
      request,
      `${API.WITHDRAWS}`,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    yield put(loadSuccess(LOADING_PREFIX.WITHDRAWS));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.WITHDRAWS, false));
  }
}

export default function* walletSaga() {
  yield takeLatest(GET_BANK_LIST, doGetBankList);
  yield takeLatest(ADD_BANK, doAddBank);
  yield takeLatest(UPDATE_BANK, doUpdateBank);
  yield takeLatest(REMOVE_BANK, doRemoveBank);
  yield takeLatest(WITHDRAWS, doWithdraw);
}
