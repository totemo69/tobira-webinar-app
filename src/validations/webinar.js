import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email address is a required field.')
    .email('Invalid email format.'),
  username: Yup.string()
    .required('Username is a required field.')
    .min(6, 'Minimum of ${min} characters.')
    .max(30, 'Max of ${max} characters.'),
  password: Yup.string()
    .required('Password is a required field.')
    .min(6, 'Minimum of ${min} characters.')
    .max(30, 'Max of ${max} characters.'),
  confirmPassword: Yup.string()
    .required('Confirm password is a required field.')
    .oneOf([Yup.ref('password'), null], 'Password match'),
});

const createWebinar = Yup.object({
  managementTitle: Yup.string().required(
    'Management title is a required field.',
  ),
  webinarAccount: Yup.string().required('Zoom account is a required field.'),
  title: Yup.string().required('Title is a required field.'),
  description: Yup.string().required('Description is a required field.'),
  frequency: Yup.string().required('Description is a required field.'),
  schedules: Yup.array()
    .of(
      Yup.object().shape({
        scheduleDate: Yup.date().required('Date is a required field.'),
        scheduleTime: Yup.date().required('Time is a required field.'),
      }),
    )
    .required('Schedule is required'),
  durationHour: Yup.number().required('Duration is a required field.'),
  durationMinute: Yup.string().required('Duration is a required field.'),
  timezone: Yup.object({
    label: Yup.string().required('Timezone is a required field.'),
  }),
});

const registrationForm = Yup.object({
  formName: Yup.string().required('Form Name is a required field.'),
  formFields: Yup.array()
    .of(
      Yup.object().shape({
        fieldName: Yup.string().required('Field Name is a required field.'),
        fieldType: Yup.string().required('Field Type is a required field.'),
        isRequired: Yup.boolean(),
        options: Yup.array().of(Yup.string()),
      }),
    )
    .required('Form Fields is required'),
});

const paymentOptions = Yup.object({
  price: Yup.number().required('Price is a required field.'),
});

const webinarRegistration = Yup.object({
  formFields: Yup.array().of(
    Yup.object().shape({
      Email: Yup.string().required('email.required').email('validEmail'),
    }),
  ),
});

export default validationSchema;
export { createWebinar, registrationForm, paymentOptions, webinarRegistration };
