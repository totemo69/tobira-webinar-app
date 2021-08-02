import { call, put, takeLatest } from 'redux-saga/effects';
import querystring from 'querystring';
import { API, GET_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors } from '@/states/global/actions';
import {
  setTransaction,
  setTransactionDetails,
} from '@/states/transaction/actions';
import { GET_TRANSACTION, GET_TRANSACTION_DETAILS } from './types';

function* doGetTransactionHistory() {
  try {
    yield put(loading(LOADING_PREFIX.TRANSACTION));
    const query = {
      order: 'createdAt DESC',
    };
    const filter = {
      filter: JSON.stringify(query),
    };
    const stringifyQuery = querystring.stringify(filter);
    const response = yield call(
      request,
      `${API.TRANSACTION}/?${stringifyQuery}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setTransaction(response));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.TRANSACTION, false));
  }
}

function* transactionDetails({ payload }) {
  try {
    yield put(loading(LOADING_PREFIX.TRANSACTION));
    const response = yield call(
      request,
      `${API.TRANSACTION}/${payload}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setTransactionDetails(response));
  } catch (error) {
    yield put(loadErrors(error));
  } finally {
    yield put(loading(LOADING_PREFIX.TRANSACTION, false));
  }
}

export default function* transactionSaga() {
  yield takeLatest(GET_TRANSACTION, doGetTransactionHistory);
  yield takeLatest(GET_TRANSACTION_DETAILS, transactionDetails);
}
