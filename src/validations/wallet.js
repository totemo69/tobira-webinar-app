import * as Yup from 'yup';

const addBankValidationSchema = Yup.object({
  bankName: Yup.string().required(),
  accountName: Yup.string().required(),
  accountNumber: Yup.string().required(),
});

const withdrawalValidationSchema = Yup.object({
  amount: Yup.string().required().min(3, 'Minimum required amount: 100 JPY'),
  bankName: Yup.string().required(),
  accountName: Yup.string().required(),
  accountNumber: Yup.string().required(),
});

export { addBankValidationSchema, withdrawalValidationSchema };
