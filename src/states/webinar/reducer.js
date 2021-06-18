import produce from 'immer';
import { SCHEDULE_TYPE } from '@/utils/constants';
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
    timezone: '',
    durationHour: '',
    durationMinute: '',
    image: '',
    schedules: [
      {
        scheduleDate: '',
        scheduleTime: '',
      },
    ],
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
