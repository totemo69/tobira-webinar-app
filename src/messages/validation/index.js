export const scope = 'validation';

const message = {
  email: Object.values({
    key: `${scope}.email`,
    default: 'Email',
  }),
  password: Object.values({
    key: `${scope}.password`,
    default: 'Password',
  }),
  required: Object.values({
    key: `${scope}.required`,
    default: 'is required.',
  }),
  requiredOnly: Object.values({
    key: `${scope}.requiredOnly`,
    default: 'Required',
  }),
  validEmail: Object.values({
    key: `${scope}.validEmail`,
    default: 'Invalid email address.',
  }),
  invalidLogin: Object.values({
    key: `${scope}.invalidLogin`,
    default:
      'The email address or password that you have entered is incorrect.',
  }),
  username: Object.values({
    key: `${scope}.username`,
    default: 'Username',
  }),
  confirmPassword: Object.values({
    key: `${scope}.confirmPassword`,
    default: 'Confirm Password',
  }),
  confirmPassMatch: Object.values({
    key: `${scope}.confirmPassMatch`,
    default: 'Confirm Password doesnt match with Password',
  }),
  usernameMinMax: Object.values({
    key: `${scope}.usernameMinMax`,
    default: 'Username must be 6 to 20 characters',
  }),
  usernameAlphaNumeric: Object.values({
    key: `${scope}.usernameMinMax`,
    default: 'Username only accepts alphanumeric characters',
  }),
  passwordMinMax: Object.values({
    key: `${scope}.passwordMinMax`,
    default: 'Password must be 6 to 20 characters',
  }),
  passwordAlphaNumeric: Object.values({
    key: `${scope}.passwordAlphaNumeric`,
    default: 'Password only accepts alphanumeric characters',
  }),
  fieldMax: Object.values({
    key: `${scope}.passwordMinMax`,
    default: 'must not exceed {max} characters.',
  }),
  fieldMin: Object.values({
    key: `${scope}.passwordMinMax`,
    default: ' must be at least {min} characters.',
  }),
  userExist: Object.values({
    key: `${scope}.userExist`,
    default: 'Email Address is already associated with an account.',
  }),
  amount: Object.values({
    key: `${scope}.amount`,
    default: 'Amount is a required field',
  }),
  bankName: Object.values({
    key: `${scope}.bankName`,
    default: 'Bank name is a required field',
  }),
  accountName: Object.values({
    key: `${scope}.accountName`,
    default: 'Account Name is a required field',
  }),
  accountNumber: Object.values({
    key: `${scope}.accountNumber`,
    default: 'Account Number is a required field',
  }),
  requiredField: Object.values({
    key: `${scope}.requiredField`,
    default: 'is a required field',
  }),
  amountMin: Object.values({
    key: `${scope}.amountMin`,
    default: 'Minimum required amount: 100 JPY',
  }),
  balance: Object.values({
    key: `${scope}.balance`,
    default: 'Not enough balance',
  }),
  fullName: Object.values({
    key: `${scope}.fullName`,
    default: 'Full name',
  }),
  contactNo: Object.values({
    key: `${scope}.contactNo`,
    default: 'Contact Number',
  }),
  manageTitle: Object.values({
    key: `${scope}.manageTitle`,
    default: 'Management title',
  }),
  zoomAccount: Object.values({
    key: `${scope}.zoomAccount`,
    default: 'Zoom account',
  }),
  title: Object.values({
    key: `${scope}.title`,
    default: 'Title',
  }),
  description: Object.values({
    key: `${scope}.description`,
    default: 'Description',
  }),
  frequency: Object.values({
    key: `${scope}.frequency`,
    default: 'Frequency',
  }),
  date: Object.values({
    key: `${scope}.date`,
    default: 'Date',
  }),
  time: Object.values({
    key: `${scope}.time`,
    default: 'Time',
  }),
  schedule: Object.values({
    key: `${scope}.schedule`,
    default: 'Schedule',
  }),
  duration: Object.values({
    key: `${scope}.duration`,
    default: 'Duration',
  }),
  timezone: Object.values({
    key: `${scope}.timezone`,
    default: 'Timezone',
  }),
  formName: Object.values({
    key: `${scope}.formName`,
    default: 'Form Name',
  }),
  fieldName: Object.values({
    key: `${scope}.fieldName`,
    default: 'Field Name',
  }),
  fieldType: Object.values({
    key: `${scope}.fieldType`,
    default: 'Field Type',
  }),
  formField: Object.values({
    key: `${scope}.formField`,
    default: 'Form Fields',
  }),
  price: Object.values({
    key: `${scope}.price`,
    default: 'Price',
  }),
  inValidEmailFormat: Object.values({
    key: `${scope}.inValidEmailFormat`,
    default: 'Invalid email format.',
  }),
  resetNotFound: Object.values({
    key: `${scope}.resetNotFound`,
    default: 'Your reset token is invalid or already expired.',
  }),
  tokenExpired: Object.values({
    key: `${scope}.tokenExpired`,
    default: 'Your reset token is invalid or already expired.',
  }),
  paypalAccount: Object.values({
    key: `${scope}.paypalAccount`,
    default: 'Paypal account',
  }),
  thisFieldIsRequired: Object.values({
    key: `${scope}.thisFieldIsRequired`,
    default: 'This field is required',
  }),
  branchCode: Object.values({
    key: `${scope}.branchCode`,
    default: 'Branch Code',
  }),
  branchName: Object.values({
    key: `${scope}.branchName`,
    default: 'Branch Name',
  }),
  accountType: Object.values({
    key: `${scope}.accountType`,
    default: 'Account Type',
  }),
  internalServerError: Object.values({
    key: `${scope}.internalServerError`,
    default: 'Internal Server Error',
  }),
  userNotFound: Object.values({
    key: `${scope}.userNotFound`,
    default: 'User not found',
  }),
  invalidPassword: Object.values({
    key: `${scope}.invalidPassword`,
    default: 'Invalid password',
  }),
};

export default message;
