import moment from 'moment';

export function CombineDateTime(date, time) {
  if (date && time) {
    return `${date.format('YYYY-MM-DD')}T${time.format('HH:mm:ss')}`;
  }
  return '';
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

export function ConvertMoment(date) {
  return moment(date);
}

export function disableWeekends(current) {
  return (
    (current && current < moment().endOf('day')) ||
    moment(current).day() === 0 ||
    moment(current).day() === 6
  );
}
