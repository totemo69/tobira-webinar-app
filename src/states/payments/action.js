import { GET_PAYMENT, SET_PAYMENT } from './types';

export const getPayments = (payload) => ({
  type: GET_PAYMENT,
  payload,
});

export const setPayments = (payload) => ({
  type: SET_PAYMENT,
  payload,
});
