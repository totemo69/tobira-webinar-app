import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullName: Yup.string().required('fullName.requiredField'),
  contact: Yup.string().required('contactNo.requiredField'),
});

export default validationSchema;
