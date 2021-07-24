import * as Yup from 'yup';

export function noWhitespace(message) {
  return this.test(
    'noWhitespace',
    message,
    (value) => value && !value.includes(' '),
  );
}

Yup.addMethod(Yup.string, 'noWhitespace', noWhitespace);

const validationSchema = Yup.object({
  email: Yup.string()
    .required('email.required')
    .email('email.validEmail')
    .max(254, 'email.fieldMax'),
  username: Yup.string()
    .required('username.required')
    .noWhitespace('usernameAlphaNumeric')
    .min(6, 'usernameMinMax')
    .max(20, 'usernameMinMax'),
  password: Yup.string()
    .required('password.required')
    .min(6, 'passwordMinMax')
    .max(20, 'passwordMinMax')
    .matches(/^[a-z0-9]+$/i, 'passwordAlphaNumeric'),
  confirmPassword: Yup.string()
    .required('confirmPassword.required')
    .oneOf([Yup.ref('password'), null], 'confirmPassMatch'),
});

export default validationSchema;
