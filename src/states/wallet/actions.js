import {
  GET_BANK_LIST,
  SET_BANK_LIST,
  ADD_BANK,
  SET_BANK,
  REMOVE_BANK,
} from './types';

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

export const updateBank = (id, payload, onCallback = null) => ({
  type: SET_BANK,
  id,
  payload,
  onCallback,
});

export const removeBank = (id, onCallback = null) => ({
  type: REMOVE_BANK,
  id,
  onCallback,
});
