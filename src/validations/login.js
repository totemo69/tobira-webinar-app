import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email address is a required field.')
    .email('Invalid email format.'),
  password: Yup.string()
    .required('Password is a required field.')
    .min(6, 'Minimum of ${min} characters.')
    .max(30, 'Max of ${max} characters.')
    .matches(/^[a-z0-9]+$/i, 'MATCH ERROR'),
});

export default validationSchema;