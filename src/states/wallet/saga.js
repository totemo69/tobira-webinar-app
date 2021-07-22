import { call, put, takeLatest } from 'redux-saga/effects';
import {
  API,
  GET_REQUEST,
  POST_REQUEST,
  LOADING_PREFIX,
} from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import { GET_BANK_LIST, ADD_BANK } from './types';
import { setBankList } from './actions';

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

export default function* walletSaga() {
  yield takeLatest(GET_BANK_LIST, doGetBankList);
  yield takeLatest(ADD_BANK, doAddBank);
}
