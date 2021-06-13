import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .required('Fullname is a required field.'),
  contact: Yup.string()
    .required('Contact is a required field.')
});

export default validationSchema;