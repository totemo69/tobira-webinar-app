export const scope = 'loginsample';

const message = {
  login: Object.values({
    key: `${scope}.login`,
    default: 'Log in'
  }),
  rememberMe: Object.values({
    key: `${scope}.rememberMe`,
    default: 'Remember Me'
  }),
  createAccount: Object.values({
    key: `${scope}.createAccount`,
    default: 'Create an account?'
  }),
  signHere: Object.values({
    key: `${scope}.signHere`,
    default: 'Sign up here'
  }),
};

export default message;