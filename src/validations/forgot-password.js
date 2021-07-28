import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('email.required').email('email.validEmail'),
});

const resetPasswordValidation = Yup.object().shape({
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

export { resetPasswordValidation };
