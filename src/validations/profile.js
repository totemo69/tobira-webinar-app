import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string(),
  contact: Yup.string().required('contactNo.requiredField'),
});

const credentialsValidation = Yup.object({
  currentPassword: Yup.string().required('password.required'),
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
export { credentialsValidation };
