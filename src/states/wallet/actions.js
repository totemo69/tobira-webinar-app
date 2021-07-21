import { GET_BANK_LIST, SET_BANK_LIST, ADD_BANK, SET_BANK } from './types';

export const getBankList = () => ({
  type: GET_BANK_LIST,
});

export const setBankList = (payload) => ({
  type: SET_BANK_LIST,
  payload,
});

export const addBank = (payload) => ({
  type: ADD_BANK,
  payload,
});

export const setBank = (payload) => ({
  type: SET_BANK,
  payload,
});
