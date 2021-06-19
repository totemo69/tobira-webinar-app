import { createSelector } from 'reselect';
import { initialState } from './reducer';
import { CombineDateTime } from '@/utils/dateUtils';

const selectWebinarsDomain = (state) => state.webinar || initialState;

/**
 * Default selector used by Counter
 */

const makeSelectWebinar = () =>
  createSelector(selectWebinarsDomain, (substate) => substate);

const makeSelectWebinars = () =>
  createSelector(selectWebinarsDomain, (substate) => substate.webinarList);

const makeSelectWebinarDetails = () =>
  createSelector(selectWebinarsDomain, (substate) => substate.webinarDetail);

const makeSelectWebinarForm = () =>
  createSelector(selectWebinarsDomain, (substate) => {
    const duration =
      substate.webinar.durationHour * 60 +
      parseInt(substate.webinar.durationMinute, 10);
    const schedules = substate.webinar.schedules.map((val) => {
      const dateTime = CombineDateTime(val.scheduleDate, val.scheduleTime);
      return {
        scheduleDate: val.scheduleDate,
        scheduleTime: val.scheduleTime,
        dateTime,
      };
    });
    return {
      ...substate.webinar,
      schedules,
      duration,
    };
  });

export default makeSelectWebinar;
export { makeSelectWebinars, makeSelectWebinarDetails, makeSelectWebinarForm };
