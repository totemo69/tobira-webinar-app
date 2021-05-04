export const scope = 'samplesignup';

const message = {
  signUp: Object.values({
    key: `${scope}.signUp`,
    default: 'Sign Up'
  }),
  agreeMessage: Object.values({
    key: `${scope}.agreeMessage`,
    default: 'By signing up, you agree to the'
  }),
  termsOfService: Object.values({
    key: `${scope}.termsOfService`,
    default: 'Terms of Service'
  }),
  and: Object.values({
    key: `${scope}.and`,
    default: 'and'
  }),
  privacyPolicy: Object.values({
    key: `${scope}.privacyPolicy`,
    default: 'Privacy Policy'
  }),
  haveAccount: Object.values({
    key: `${scope}.haveAccount`,
    default: 'Already have an account?'
  }),
  loginHere: Object.values({
    key: `${scope}.loginHere`,
    default: 'Log in here',
  }),
};

export default message;