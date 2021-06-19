import produce from 'immer';
import { SCHEDULE_TYPE, PAYMENT_METHOD } from '@/utils/constants';
import { SET_WEBINAR_LIST, WEBINAR_DETAILS, SET_WEBINAR } from './types';

export const initialState = {
  webinarList: [],
  webinarDetail: {},
  webinar: {
    managementTitle: '',
    webinarAccount: '',
    title: '',
    description: '',
    frequency: SCHEDULE_TYPE.ONETIME,
    timezone: {},
    durationHour: '',
    durationMinute: '',
    duration: '',
    image: '',
    schedules: [
      {
        scheduleDate: '',
        scheduleTime: '',
        dateTime: '',
      },
    ],
    formName: '',
    formFields: [
      {
        fieldName: 'Email',
        fieldType: 'Email',
        isRequired: true,
        options: [],
      },
    ],
    price: 0,
    paymentModes: PAYMENT_METHOD.PAYPAL,
  },
};
/* eslint-disable default-case, no-param-reassign */
const webinarReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_WEBINAR_LIST: {
        draft.webinarList = action.payload;
        break;
      }
      case WEBINAR_DETAILS: {
        draft.webinarDetail = action.payload;
        break;
      }
      case SET_WEBINAR: {
        draft.webinar = {
          ...draft.webinar,
          ...action.payload,
        };
        break;
      }
    }
  });

export default webinarReducer;
