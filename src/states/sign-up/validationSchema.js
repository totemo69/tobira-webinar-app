import * as Yup from 'yup';


const validationSchema = Yup.object({
  email: Yup.string()
    .required('please insert your valid email')
    .email('invalid Email format'),
  password: Yup.string()
    .required('paswword is required')
    .min(8, 'miniminum of 8 character'),
  confirmPassword: Yup.string()
    .required('input confirm password')
    .oneOf([Yup.ref('password'), null], 'Password match'),
});

export default validationSchema;
