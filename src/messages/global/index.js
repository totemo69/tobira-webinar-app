export const scope = 'global';

const message = {
  header: Object.values({
    key: `${scope}.h1`,
    default: 'This is header'
  }),
  email: Object.values({
    key: `${scope}.email`,
    default: 'Email'
  }),
  enterEmail: Object.values({
    key: `${scope}.enterEmail`,
    default: 'Enter your email'
  }),
  password: Object.values({
    key: `${scope}.password`,
    default: 'Password'
  }),
  enterPassword: Object.values({
    key: `${scope}.enterPassword`,
    default: 'Enter your password'
  }),
  username: Object.values({
    key: `${scope}.username`,
    default: 'Username'
  }),
  enterUsername: Object.values({
    key: `${scope}.enterUsername`,
    default: 'Enter your username'
  }),
  confirmPassword: Object.values({
    key: `${scope}.confirmPassword`,
    default: 'Confirm password'
  }),
  
};

export default message;