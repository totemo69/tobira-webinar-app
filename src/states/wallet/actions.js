import {
  GET_BANK_LIST,
  SET_BANK_LIST,
  ADD_BANK,
  SET_BANK,
  REMOVE_BANK,
  WITHDRAWS,
  UPDATE_BANK,
  SET_WITHDRAW,
  GET_WALLET,
  SET_WALLET,
} from './types';

export const getBankList = () => ({
  type: GET_BANK_LIST,
});

export const setBankList = (payload) => ({
  type: SET_BANK_LIST,
  payload,
});

export const getWallet = () => ({
  type: GET_WALLET,
});

export const setWallet = (payload) => ({
  type: SET_WALLET,
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

export const updateBank = (payload) => ({
  type: UPDATE_BANK,
  payload,
});

export const removeBank = (id, onCallback = null) => ({
  type: REMOVE_BANK,
  id,
  onCallback,
});

export const withdraws = (payload) => ({
  type: WITHDRAWS,
  payload,
});

export const setWithdraw = (payload) => ({
  type: SET_WITHDRAW,
  payload,
});
