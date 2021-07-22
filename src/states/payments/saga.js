import { takeEvery, call, put } from 'redux-saga/effects';
import querystring from 'querystring';
import { API, GET_REQUEST, LOADING_PREFIX } from '@/utils/constants';
import { request, RequestOptions } from '@/utils/request';
import { loading, loadErrors, loadSuccess } from '@/states/global/actions';
import { GET_PAYMENT } from './types';
import { setPayments } from './action';

function* getPaymentSaga({ payload }) {
  try {
    // Set loading status to true
    yield put(loading(LOADING_PREFIX.PAYMENT));
    const { attendeeId, webinarId } = payload;
    const query = {
      where: {
        attendeeId,
        webinarId,
      },
    };
    const filter = {
      filter: JSON.stringify(query),
    };
    const stringifyQuery = querystring.stringify(filter);
    const response = yield call(
      request,
      `${API.PAYMENT}?${stringifyQuery}`,
      RequestOptions(GET_REQUEST, null, true),
    );
    yield put(setPayments(response));
    // Set the status to success
    yield put(loadSuccess(LOADING_PREFIX.PAYMENT));
  } catch (error) {
    // Set the status to failed
    yield put(loadSuccess(LOADING_PREFIX.PAYMENT, false));
    // Set the error
    yield put(loadErrors(error));
  } finally {
    // Set loading status to false
    yield put(loading(LOADING_PREFIX.PAYMENT, false));
  }
}

export default function* paymentSaga() {
  yield takeEvery(GET_PAYMENT, getPaymentSaga);
}
