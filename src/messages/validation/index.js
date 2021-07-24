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
};

export default message;
