import produce from 'immer';
import { SCHEDULE_TYPE, PAYMENT_METHOD } from '@/utils/constants';
import {
  SET_WEBINAR_LIST,
  WEBINAR_DETAILS,
  SET_WEBINAR,
  SET_WEBINAR_PUBLIC,
  WEBINAR_REGISTER,
  SET_ATTENDEE,
  SET_PAYMENT,
  CLEAR_WEBINAR,
} from './types';

export const initialState = {
  webinarList: [],
  webinarDetail: {},
  webinarPublic: {
    formName: 'Register',
    formFields: [
      {
        fieldName: 'Email',
        fieldType: 'Email',
        isRequired: true,
        options: [],
      },
    ],
    price: 0,
  },
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
    formName: 'Register',
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
  webinarRegister: {
    formFields: [{}],
  },
  registrationForm: {
    webinarId: '',
    formValues: [{}],
  },
  attendee: {},
  payment: {},
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
      case SET_WEBINAR_PUBLIC: {
        const {
          id,
          title,
          slug,
          description,
          formName,
          formFields,
          price,
          schedules,
          timezone,
          duration,
          status,
        } = action.payload;
        draft.webinarPublic = {
          id,
          slug,
          description,
          formName,
          formFields,
          price,
          title,
          schedules,
          timezone,
          duration,
          status,
        };
        break;
      }
      case WEBINAR_REGISTER: {
        draft.webinarRegister = {
          ...draft.webinarRegister,
          ...action.payload,
        };
        const { webinarId, formFields } = action.payload;
        const formattedFields = formFields.map((field) => {
          const formField = draft.webinarPublic.formFields.find((form) => {
            const fieldName = Object.keys(field)[0];
            if (form.fieldName === fieldName) {
              return true;
            }
            return false;
          });
          return {
            fieldName: formField?.fieldName,
            fieldValue: Object.values(field)[0],
            fieldType: formField?.fieldType,
            isRequired: formField?.isRequired,
            options: formField?.options,
          };
        });
        draft.registrationForm = {
          webinarId,
          formValues: formattedFields,
        };
        break;
      }
      case SET_ATTENDEE: {
        draft.attendee = {
          ...draft.attendee,
          ...action.payload,
        };
        break;
      }
      case SET_PAYMENT: {
        draft.payment = {
          ...draft.payment,
          ...action.payload,
        };
        break;
      }
      case CLEAR_WEBINAR: {
        draft.webinar = {
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
          formName: 'Register',
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
        };
        break;
      }
    }
  });

export default webinarReducer;
