import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPlanDomain = (state) => state.plans || initialState;

const makeSelectPlan = () =>
  createSelector(selectPlanDomain, (substate) => substate);

const makeSelectPlanList = () =>
  createSelector(selectPlanDomain, (substate) => substate.planList);

export default makeSelectPlan;
export { makeSelectPlanList };
