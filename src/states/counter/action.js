import {
  INCREMENT,
  DECREMENT,
  RESET,
} from './types';

export function incrementCount() {
  return {
    type: INCREMENT,
  };
}

export function decrementCount() {
  console.log('test');
  return {
    type: DECREMENT,
  };
}

export function resetCount() {
  return {
    type: RESET,
  };
}