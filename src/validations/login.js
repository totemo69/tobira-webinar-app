import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('email.required').email('email.invalidFormat'),
  password: Yup.string().required('password.required'),
});

export default validationSchema;
