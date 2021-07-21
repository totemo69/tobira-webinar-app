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

export function DateIsBefore(date) {
  return moment().isBefore(date);
}

export function DateIsSame(date) {
  return moment().isSame(date, 'day');
}

export function FormatDate(date, format = 'YYYY-MM-DD') {
  if (date === null) {
    return moment().format(format);
  }
  return moment(date).format(format);
}
