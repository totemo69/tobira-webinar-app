import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('Email address is a required field.')
    .email('Invalid email format.'),
  // .required('email.required')
  // .email('email.invalidFormat'),
  password: Yup.string()
    .required('Password is a required field.')
    .min(6, 'Minimum of ${min} characters.')
    .min(30, 'Max of ${max} characters.')
    .matches(/^[a-z0-9]+$/i, 'MATCH ERROR'),
  // .required('password.required')
  // .min(6, 'passwordMinMax')
  // .max(30, 'passwordMinMax')
  // .matches(/^[a-z0-9]+$/i, 'passwordAlphaNumeric'),
});

export default validationSchema;
