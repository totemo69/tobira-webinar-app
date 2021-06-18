export const scope = 'header';

const message = {
  accounts: Object.values({
    key: `${scope}.accounts`,
    default: 'Accounts',
  }),
  purchaseLicense: Object.values({
    key: `${scope}.purchaseLicense`,
    default: 'Purchase License',
  }),
  wallet: Object.values({
    key: `${scope}.wallet`,
    default: 'Wallet',
  }),
  logOut: Object.values({
    key: `${scope}.logOut`,
    default: 'Log out',
  }),
};

export default message;
