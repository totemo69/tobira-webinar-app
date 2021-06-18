import { PLANS_GET, PLANS_COUNT, PLANS_SUCCESS, PLANS_FAILED } from './types';

export const getPlans = (payload) => ({
  type: PLANS_GET,
  payload,
});

export const getPlansCount = (payload) => ({
  type: PLANS_COUNT,
  payload,
});

export const plansSuccess = (payload) => ({
  type: PLANS_SUCCESS,
  payload,
});

export const plansFailed = (payload) => ({
  type: PLANS_FAILED,
  payload,
});
