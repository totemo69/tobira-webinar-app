export const scope = 'forgotpasswordsample';

const message = {
  forgotPasswordText: Object.values({
    key: `${scope}.forgotPasswordText`,
    default: "Enter your email address and we'll send you an email with instructions for setting a new one"
  }),
  goToLogin: Object.values({
    key: `${scope}.goToLogin`,
    default: "Go Back To Log in"
  }),
};

export default message;