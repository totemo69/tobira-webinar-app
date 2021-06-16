import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWebinarsDomain = state => state.webinar || initialState;

/**
 * Default selector used by Counter
 */

const makeSelectWebinar = () =>
  createSelector(
    selectWebinarsDomain,
    substate => substate,
  );

const makeSelectWebinars = () =>
  createSelector(
    selectWebinarsDomain,
    substate => substate.webinarList,
  );


export default makeSelectWebinar;
export { makeSelectWebinars };