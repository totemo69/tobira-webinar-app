import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('REQUIRED ERROR')
    .email('EMAIL ERROR'),
  // .required('email.required')
  // .email('email.invalidFormat'),
  password: Yup.string()
    .required('REQUIRED ERROR')
    .min(6, 'MIN MAX ERROR')
    .max(30, 'MIN MAX ERROR')
    .matches(/^[a-z0-9]+$/i, 'MATCH ERROR'),
  // .required('password.required')
  // .min(6, 'passwordMinMax')
  // .max(30, 'passwordMinMax')
  // .matches(/^[a-z0-9]+$/i, 'passwordAlphaNumeric'),
});

export default validationSchema;