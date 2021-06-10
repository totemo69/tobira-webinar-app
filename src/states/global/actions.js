import {
  LOAD_ERRORS,
  CLEAR_ERRORS,
  LOADING,
} from './types';


export function loadErrors(error) {
  return {
    type: LOAD_ERRORS,
    error,
  };
}

export function clearErrors() {
  return {
    type: CLEAR_ERRORS,
  };
}

export function loading(key, isLoading = true) {
  return {
    type: LOADING,
    key,
    isLoading,
  };
}