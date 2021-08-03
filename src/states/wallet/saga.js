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
  GET_WALLET,
} from './types';
import { setBankList, setWallet } from './actions';
import { makeSelectWithdraw } from './selector';

function* doGetBankList() {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.BANK_LIST));
    const response = yield call(
      request,
      `${API.BANKS}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setBankList(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.BANK_LIST));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.BANK_LIST, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.BANK_LIST, false));
  }
}

function* doAddBank({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.BANK));
    yield call(
      request,
      `${API.BANKS}`,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.BANK));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.BANK, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.BANK, false));
  }
}

function* doUpdateBank({ id, payload }) {
  // Set loading status to true
  yield put(loading(LOADING_PREFIX.BANK));
  try {
    yield call(
      request,
      `${API.BANKS}/${id}`,
      RequestOptions(PATCH_REQUEST, { ...payload }, true),
    );
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.BANK));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.BANK, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.BANK, false));
  }
}

function* doRemoveBank({ id, onCallback }) {
  // Set loading status to true
  yield put(loading(LOADING_PREFIX.BANK));
  try {
    yield call(
      request,
      `${API.BANKS}/${id}`,
      RequestOptions(DELETE_REQUEST, {}, true),
    );
    if (onCallback) {
      onCallback(true);
    }
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.BANK));
  } catch (error) {
    onCallback(false);
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.BANK, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.BANK, false));
  }
}

function* doWithdraw() {
  try {
    yield put(loading(LOADING_PREFIX.WITHDRAWS));
    const payload = yield select(makeSelectWithdraw());
    yield call(
      request,
      `${API.WITHDRAWS}`,
      RequestOptions(POST_REQUEST, { ...payload }, true),
    );
    yield put(loadSuccess(LOADING_PREFIX.WITHDRAWS));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.WITHDRAWS, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.WITHDRAWS, false));
  }
}

function* getMyWallet() {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.WALLET));
    const response = yield call(
      request,
      `${API.WALLET}/mywallet`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setWallet(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.WALLET));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.WALLET, false));
  }
}

export default function* walletSaga() {
  yield takeLatest(GET_BANK_LIST, doGetBankList);
  yield takeLatest(ADD_BANK, doAddBank);
  yield takeLatest(UPDATE_BANK, doUpdateBank);
  yield takeLatest(REMOVE_BANK, doRemoveBank);
  yield takeLatest(WITHDRAWS, doWithdraw);
  yield takeLatest(GET_WALLET, getMyWallet);
}
