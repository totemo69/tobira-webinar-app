export const scope = 'account';

const message = {
  accountTitle: Object.values({
    key: `${scope}.accountTitle`,
    default: 'ACCOUNTS',
  }),
  accountSubTitle: Object.values({
    key: `${scope}.accountSubTitle`,
    default: 'Zoom Accounts',
  }),
  accountTabTitle: Object.values({
    key: `${scope}.accountTabTitle`,
    default: 'Zoom Account',
  }),
  accountLabel: Object.values({
    key: `${scope}.accountLabel`,
    default: 'Email Address or Contact Number',
  }),
  accountStatus: Object.values({
    key: `${scope}.accountStatus`,
    default: 'Status',
  }),
  connectedButton: Object.values({
    key: `${scope}.connectedButton`,
    default: 'Connected',
  }),
  defaultButton: Object.values({
    key: `${scope}.defaultButton`,
    default: 'Pending',
  }),
  purchaseButton: Object.values({
    key: `${scope}.purchaseButton`,
    default: 'Buy License',
  }),
  requestedButton: Object.values({
    key: `${scope}.requestedButton`,
    default: 'Pending License',
  }),
  licenseButton: Object.values({
    key: `${scope}.licenseButton`,
    default: 'Licensed',
  }),
  addAccountButton: Object.values({
    key: `${scope}.addAccountButton`,
    default: 'Add account',
  }),
  completedMessage: Object.values({
    key: `${scope}.completedMessage`,
    default: 'Zoom account has been successfully created.',
  }),
  completedInstruction: Object.values({
    key: `${scope}.completedInstruction`,
    default: 'Please check your email for zoom account activation.',
  }),
  createNewWebinar: Object.values({
    key: `${scope}.createNewWebinar`,
    default: 'Create a webinar now',
  }),
  gotoAccounts: Object.values({
    key: `${scope}.gotoAccounts`,
    default: 'Go to Accounts',
  }),
  purchasedTitle: Object.values({
    key: `${scope}.purchasedTitle`,
    default: 'Zoom License Purchase',
  }),
  purchasedMessage: Object.values({
    key: `${scope}.purchasedMessage`,
    default: 'Zoom account has been successfully purchased.',
  }),
  purchasedInstruction: Object.values({
    key: `${scope}.purchasedInstruction`,
    default: 'Pleae wait for license activation.',
  }),
};

export default message;
