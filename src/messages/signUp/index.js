export const scope = 'signUp';

const message = {
  signUp: Object.values({
    key: `${scope}.signUp`,
    default: 'Sign Up'
  }),
  agreeMessage: Object.values({
    key: `${scope}.agreeMessage`,
    default: 'By signing up, you agree to the'
  }),
  haveAccount: Object.values({
    key: `${scope}.haveAccount`,
    default: 'Already have an account?'
  }),
  loginHere: Object.values({
    key: `${scope}.loginHere`,
    default: 'Log in here',
  }),
  verificationMsg: Object.values({
    key: `${scope}.verificationMsg`,
    default: 'A verification mail has been sent to your email account. Please check your email and click the link to confirm.',
  }),
};

export default message;