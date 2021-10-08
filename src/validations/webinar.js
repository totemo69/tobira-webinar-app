import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('email.requiredField')
    .email('inValidEmailFormat'),
  username: Yup.string()
    .required('username.requiredField')
    .min(6, 'fieldMin')
    .max(30, 'fieldMax'),
  password: Yup.string()
    .required('password.requiredField')
    .min(6, 'fieldMin')
    .max(30, 'fieldMax'),
  confirmPassword: Yup.string()
    .required('confirmPassword.requiredField')
    .oneOf([Yup.ref('password'), null], 'Password match'),
});

const createWebinar = Yup.object({
  managementTitle: Yup.string().required('thisFieldIsRequired'),
  webinarAccount: Yup.string().required('thisFieldIsRequired'),
  title: Yup.string().required('thisFieldIsRequired'),
  description: Yup.string().required('thisFieldIsRequired'),
  frequency: Yup.string().required('thisFieldIsRequired'),
  schedules: Yup.array()
    .of(
      Yup.object().shape({
        scheduleDate: Yup.date().required('thisFieldIsRequired'),
        scheduleTime: Yup.date().required('thisFieldIsRequired'),
      }),
    )
    .required('thisFieldIsRequired'),
  durationHour: Yup.number().required('thisFieldIsRequired'),
  durationMinute: Yup.string().required('thisFieldIsRequired'),
  timezone: Yup.object({
    label: Yup.string().required('thisFieldIsRequired'),
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
  price: Yup.number().required('thisFieldIsRequired'),
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
