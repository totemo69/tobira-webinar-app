import moment from 'moment';

export function DateTime(date, time) {
  return moment(date + time);
}
