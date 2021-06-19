import moment from 'moment';

export function CombineDateTime(date, time) {
  if (date && time) {
    return moment(`${date.format('MM/DD/YYYY')} ${time.format('HH:mm')}`);
  }
  return null;
}

export function DisableDates(current) {
  return current && current < moment().endOf('day');
}
