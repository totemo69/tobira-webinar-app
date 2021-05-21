import {
  PLANS_GET,
  PLANS_SUCCESS,
  PLANS_FAILED,
} from './types';
  
export const getPlans = (payload) => ({
  type: PLANS_GET,
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