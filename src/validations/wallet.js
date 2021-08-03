import * as Yup from 'yup';

const addBankValidationSchema = Yup.object({
  bankName: Yup.string().required('bankName.requiredField'),
  accountName: Yup.string().required('accountName.requiredField'),
  accountNumber: Yup.string().required('accountNumber.requiredField'),
});

const withdrawalValidationSchema = Yup.object({
  amount: Yup.string().required('amount.requiredField').min(3, 'amountMin'),
  gatewayType: Yup.string(),
  gatewayDetails: Yup.object({
    gatewayType: Yup.string(),
    bankName: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('bankName.requiredField'),
    }),
    accountName: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('accountName.requiredField'),
    }),
    accountNumber: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('accountNumber.requiredField'),
    }),
    paypal: Yup.string().when('gatewayType', {
      is: 'paypal',
      then: Yup.string()
        .required('paypalAccount.requiredField')
        .email('paypalAccount.validEmail'),
    }),
  }),
});

export { addBankValidationSchema, withdrawalValidationSchema };
