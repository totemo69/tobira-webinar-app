import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    .required('email.required')
    .email('email.invalidFormat'),
  password: Yup.string()
    .required('password.required')
    .min(6, 'passwordMinMax')
    .max(30, 'passwordMinMax')
    .matches(/^[a-z0-9]+$/i, 'passwordAlphaNumeric'),
});

export default validationSchema;