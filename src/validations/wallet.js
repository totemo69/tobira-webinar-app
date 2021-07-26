import * as Yup from 'yup';

const addBankValidationSchema = Yup.object({
  bankName: Yup.string().required('bankName.requiredField'),
  accountName: Yup.string().required('accountName.requiredField'),
  accountNumber: Yup.string().required('accountNumber.requiredField'),
});

const withdrawalValidationSchema = Yup.object({
  amount: Yup.string().required('amount.requiredField').min(3, 'amountMin'),
  bankName: Yup.string().required('bankName.requiredField'),
  accountName: Yup.string().required('accountName.requiredField'),
  accountNumber: Yup.string().required('accountNumber.requiredField'),
});

export { addBankValidationSchema, withdrawalValidationSchema };
