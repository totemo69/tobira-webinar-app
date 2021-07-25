import { call, put, takeLatest } from 'redux-saga/effects';
import { API, GET_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors } from '@/states/global/actions';
import { setTransaction } from '@/states/transaction/actions';
import { GET_TRANSACTION } from './types';

function* doGetTransactionHistory() {
  try {
    yield put(loading(LOADING_PREFIX.TRANSACTION));
    const response = yield call(
      request,
      `${API.TRANSACTION}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setTransaction(response));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.TRANSACTION, false));
  }
}

export default function* transactionSaga() {
  yield takeLatest(GET_TRANSACTION, doGetTransactionHistory);
}
