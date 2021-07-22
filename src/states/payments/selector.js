import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPaymentsDomain = (state) => state.payments || initialState;

const makeSelectPayments = () =>
  createSelector(selectPaymentsDomain, (substate) => substate);

const makeSelecPaymentsDetails = () =>
  createSelector(selectPaymentsDomain, (substate) => substate.paymentDetails);

export default makeSelectPayments;

export { makeSelecPaymentsDetails };
