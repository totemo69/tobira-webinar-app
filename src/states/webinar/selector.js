import { CombineDateTime, ConvertMoment } from '@/utils/dateUtils';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectWebinarsDomain = (state) => state.webinar || initialState;

/**
 * Default selector used by Counter
 */

const makeSelectWebinar = () =>
  createSelector(selectWebinarsDomain, (substate) => substate);

const makeSelectWebinars = () =>
  createSelector(selectWebinarsDomain, (substate) => substate.webinarList);

const makeSelectWebinarDetails = () =>
  createSelector(selectWebinarsDomain, (substate) => {
    let schedules = [{ scheduleDate: '', scheduleTime: '' }];

    if (substate.webinarDetail && substate.webinarDetail.schedules) {
      schedules = substate.webinarDetail.schedules.map((val) => ({
        scheduleDate: val.scheduleDate,
        scheduleTime: val.scheduleTime,
        dateTime: val.dateTime,
      }));
    }

    return {
      ...substate.webinarDetail,
      schedules,
    };
  });

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

const makeSelectWebinarUpdateForm = () =>
  createSelector(selectWebinarsDomain, (substate) => {
    const duration =
      substate.updateWebinar.durationHour * 60 +
      parseInt(substate.updateWebinar.durationMinute, 10);
    const schedules = substate.updateWebinar.schedules.map((val) => ({
      scheduleDate: ConvertMoment(val.scheduleDate),
      scheduleTime: ConvertMoment(val.scheduleTime),
    }));
    return {
      ...substate.updateWebinar,
      schedules,
      duration,
    };
  });

const makeSelectWebinarPublic = () =>
  createSelector(selectWebinarsDomain, (substate) => substate.webinarPublic);

const makeSelectWebinarRegistration = () =>
  createSelector(selectWebinarsDomain, (substate) => substate.webinarRegister);

const makeSelectWebinarRegistrationForm = () =>
  createSelector(selectWebinarsDomain, (substate) => substate.registrationForm);

const makeSelectWebinarAttendee = () =>
  createSelector(selectWebinarsDomain, (substate) => substate.attendee);

const makeSelectWebinarPayment = () =>
  createSelector(selectWebinarsDomain, (substate) => substate.payment);

export default makeSelectWebinar;
export {
  makeSelectWebinars,
  makeSelectWebinarDetails,
  makeSelectWebinarForm,
  makeSelectWebinarUpdateForm,
  makeSelectWebinarPublic,
  makeSelectWebinarRegistration,
  makeSelectWebinarRegistrationForm,
  makeSelectWebinarAttendee,
  makeSelectWebinarPayment,
};
