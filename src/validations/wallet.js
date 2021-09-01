import * as Yup from 'yup';

const addBankValidationSchema = Yup.object({
  bankName: Yup.string().required('bankName.requiredField'),
  branchCode: Yup.string().required('branchCode.requiredField'),
  branchName: Yup.string().required('branchCode.requiredField'),
  accountName: Yup.string().required('accountName.requiredField'),
  accountNumber: Yup.string().required('accountNumber.requiredField'),
  accountType: Yup.string().required('accountType.requiredField'),
  requestorName: Yup.string().required('thisFieldIsRequired'),
});

const withdrawalValidationSchema = Yup.object({
  amount: Yup.string().required('amount.requiredField').min(3, 'amountMin'),
  gatewayType: Yup.string(),
  requestDate: Yup.string().required('thisFieldIsRequired'),
  gatewayDetails: Yup.object({
    gatewayType: Yup.string(),
    bankName: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('bankName.requiredField'),
    }),
    branchCode: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('branchCode.requiredField'),
    }),
    branchName: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('branchName.requiredField'),
    }),
    accountName: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('accountName.requiredField'),
    }),
    accountNumber: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('accountNumber.requiredField'),
    }),
    accountType: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('accountType.requiredField'),
    }),
    requestorName: Yup.string().when('gatewayType', {
      is: 'bank',
      then: Yup.string().required('thisFieldIsRequired'),
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
