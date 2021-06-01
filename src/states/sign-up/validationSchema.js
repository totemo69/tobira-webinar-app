import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string()
    // .required('Email address is a required field.')
    .email('Invalid email format.'),
  username: Yup.string()
    // .required('Username is a required field.')
    .min(6, 'Minimum of ${min} characters.')
    .min(30, 'Max of ${max} characters.'),
  password: Yup.string()
    // .required('Password is a required field.')
    .min(6, 'Minimum of ${min} characters.')
    .min(30, 'Max of ${max} characters.'),
  confirmPassword: Yup.string()
    // .required('Confirm password is a required field.')
    .oneOf([Yup.ref('password'), null], 'Password match'),
});

export default validationSchema;
