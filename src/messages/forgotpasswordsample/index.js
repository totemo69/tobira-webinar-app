export const scope = 'forgotpasswordsample';

const message = {
  forgotPasswordText: Object.values({
    key: `${scope}.forgotPasswordText`,
    default: "Enter your email address and we'll send you an email with instructions for setting a new one"
  }),
  recoverInstructions: Object.values({
    key: `${scope}.recoverInstructions`,
    default: "We have sent a password recover instructions to your email."
  }),
  checkSpam: Object.values({
    key: `${scope}.checkSpam`,
    default: "If you don't see the email in your inbox, please check your spam folder."
  }),
};

export default message;