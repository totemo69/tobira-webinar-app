import { PLANS_GET, PLANS_SET } from './types';

export const getPlans = (payload) => ({
  type: PLANS_GET,
  payload,
});

export const setPlans = (payload) => ({
  type: PLANS_SET,
  payload,
});
