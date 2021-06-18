export const scope = 'account';

const message = {
  completedTitle: Object.values({
    key: `${scope}.completedTitle`,
    default: 'Setup Complete!',
  }),
  completedMessage: Object.values({
    key: `${scope}.completedMessage`,
    default: 'Zoom account has been successfully added.',
  }),
  createNewWebinar: Object.values({
    key: `${scope}.createNewWebinar`,
    default: 'Create a webinar now',
  }),
  gotoAccounts: Object.values({
    key: `${scope}.gotoAccounts`,
    default: 'Go to Accounts',
  }),
};

export default message;
