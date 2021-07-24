import { GET_TRANSACTION, SET_TRANSACTION } from './types';

export const getTransaction = () => ({
  type: GET_TRANSACTION,
});

export const setTransaction = (payload) => ({
  type: SET_TRANSACTION,
  payload,
});
