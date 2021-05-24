import { takeEvery, all, call, put } from 'redux-saga/effects';
import { PAYMENTS_COUNT } from './types';
import { paymentSuccess, paymentFailed } from './action';
import { API } from '@/utils/constants';
import {request}  from '@/utils/request';

function* getPaymentSaga() {
  try{
    const data = yield call(request, API.AUTH_PAYMENTS_COUNT);
    yield put(paymentSuccess(data));
    console.log(data);
  } catch(error){
    yield put(paymentFailed(error.message));
  }
}

function* getPaymentWatcher() {
  yield takeEvery(PAYMENTS_COUNT, getPaymentSaga);
}

export default function* paymentSaga() {
  yield all([getPaymentWatcher()]);
}