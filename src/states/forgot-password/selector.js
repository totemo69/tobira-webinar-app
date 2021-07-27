import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectForgotPasswordUpDomain = (state) =>
  state.forgotpassword || initialState;

const makeSelectForgotPassword = () =>
  createSelector(selectForgotPasswordUpDomain, (substate) => substate);

const makeSelectPassword = () =>
  createSelector(
    selectForgotPasswordUpDomain,
    (substate) => substate.forgotpassword,
  );
export default makeSelectForgotPassword;
export { makeSelectPassword };
