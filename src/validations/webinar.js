import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('email.requiredField')
    .email('Invalid email format.'),
  username: Yup.string()
    .required('username.requiredField')
    .min(6, 'Minimum of ${min} characters.')
    .max(30, 'Max of ${max} characters.'),
  password: Yup.string()
    .required('password.requiredField')
    .min(6, 'Minimum of ${min} characters.')
    .max(30, 'Max of ${max} characters.'),
  confirmPassword: Yup.string()
    .required('confirmPassword.requiredField')
    .oneOf([Yup.ref('password'), null], 'Password match'),
});

const createWebinar = Yup.object({
  managementTitle: Yup.string().required('manageTitle.requiredField'),
  webinarAccount: Yup.string().required('zoomAccount.requiredField'),
  title: Yup.string().required('title.requiredField'),
  description: Yup.string().required('description.requiredField'),
  frequency: Yup.string().required('frequency.requiredField'),
  schedules: Yup.array()
    .of(
      Yup.object().shape({
        scheduleDate: Yup.date().required('date.requiredField'),
        scheduleTime: Yup.date().required('time.requiredField'),
      }),
    )
    .required('schedule.requiredField'),
  durationHour: Yup.number().required('duration.requiredField'),
  durationMinute: Yup.string().required('duration.requiredField'),
  timezone: Yup.object({
    label: Yup.string().required('timezone.requiredField'),
  }),
});

const registrationForm = Yup.object({
  formName: Yup.string().required('formName.requiredField'),
  formFields: Yup.array()
    .of(
      Yup.object().shape({
        fieldName: Yup.string().required('fieldName.requiredField'),
        fieldType: Yup.string().required('fieldType.requiredField'),
        isRequired: Yup.boolean(),
        options: Yup.array().of(Yup.string()),
      }),
    )
    .required('formField.requiredField'),
});

const paymentOptions = Yup.object({
  price: Yup.number().required('price.requiredField'),
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
