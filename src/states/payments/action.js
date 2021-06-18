import {
  PAYMENTS_COUNT,
  PAYMENTS_GET,
  PAYMENTS_SUCCESS,
  PAYMENTS_FAILED,
} from './types';

export const getPayments = (payload) => ({
  type: PAYMENTS_GET,
  payload,
});

export const getPaymentsCount = (payload) => ({
  type: PAYMENTS_COUNT,
  payload,
});

export const paymentSuccess = (payload) => ({
  type: PAYMENTS_SUCCESS,
  payload,
});

export const paymentFailed = (payload) => ({
  type: PAYMENTS_FAILED,
  payload,
});
