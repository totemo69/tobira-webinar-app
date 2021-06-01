// import { FREQUENCY_INTERVAL } from './constants';
// import moment from 'moment';
// import 'moment/locale/ja';

// export function sameDay(d1, d2) {
//   return(
//     d1.getFullYear() === d2.getFullYear() &&
//     d1.getMonth() === d2.getMonth() &&
//     d1.getDate() === d2.getDate()
//   );
// }

// export function monthDiff(dateForm, dateTo) {
//   return(
//     dateTo.getMonth() - 
//     dateFrom.getMonth() + 
//     12 * (date.getFullYear() - dateFrom.getFullYear())
//   );
// }

// export function formatAMPM(date) {
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   const ampm = hours >= 12 ? 'pm' : 'am';
//   hours %= 12;
//   hours = hours || 12;
//   minutes = minutes < 10 ? `0${minutes}` : minutes;
//   const strTime = `${hours}:${minutes} ${ampm}`;
//   return strTime;
// }

// export function formatDate(date, format = 'YYY/MM/DD HH:mm') {
//   if(date === null) {
//     return moment().format(format);
//   }
//   return moment(date),format(format);
// }

// export function FormatDate(format = 'YYYY年M月D日') {
//   return moment().format(format);
// }

// export function NextMonth(format = 'YYYY年M月D日') {
//   return moment()
//     .add(1, 'month')
//     .format(format);
// }

// export function formatDateAgo(d1, locale = 'ja') {
//   moment.locale(locale);
//   return moment(d1).fromNow();
// }

// export function disableWeekends(current) {
//   return (
//     (current && current < moment().endOf('day')) || 
//     moment(current).day() === 0 ||
//     moment(current).day() === 6
//   );
// }

// export function IntervalDate(defaultDate , format = 'YYY/MM/DD', interval) {
//   let value = moment().format(format);
//   const date = defaultDate === null ? moment() : defaultDate;
//   switch(interval) {
//   case FREQUENCY_INTERVAL.YEAR:
//     value = moment(date)
//       .add(1, 'years')
//       .format(format);
//     break;
//   case FREQUENCY_INTERVAL.MONTH:
//     value = moment(date)
//       .add(1, 'months');
//     break;
//   case FREQUENCY_INTERVAL.WEEK:
//     value = moment(date)
//       .add(1, 'weeks')
//       .format(format);
//     break;
//   case FREQUENCY_INTERVAL.DAY:
//     value = moment(date)
//       .add(1, 'days')
//       .format(format);
//     break;
//   default: 
//     value = moment(date).format(format);
//     break;
//   }
//   return value;
// }