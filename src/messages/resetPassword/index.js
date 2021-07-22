export const scope = 'resetPassword';

const message = {
  resetPassword: Object.values({
    key: `${scope}.resetPassword`,
    default: 'Reset Password',
  }),
  resetSuccess: Object.values({
    key: `${scope}.resetSuccess`,
    default: 'Password has been reset successfully.',
  }),
};

export default message;
