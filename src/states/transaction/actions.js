import {
  GET_TRANSACTION,
  SET_TRANSACTION,
  GET_TRANSACTION_DETAILS,
  SET_TRANSACTION_DETAILS,
} from './types';

export const getTransaction = () => ({
  type: GET_TRANSACTION,
});

export const setTransaction = (payload) => ({
  type: SET_TRANSACTION,
  payload,
});

export const getTransactionDetails = () => ({
  type: GET_TRANSACTION_DETAILS,
});

export const setTransactionDetails = (payload) => ({
  type: SET_TRANSACTION_DETAILS,
  payload,
});
