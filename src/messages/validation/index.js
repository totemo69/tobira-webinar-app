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
};

export default message;
