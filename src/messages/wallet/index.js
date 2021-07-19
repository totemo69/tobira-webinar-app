export const scope = 'wallet';

const message = {
  wallet: Object.values({
    key: `${scope}.wallet`,
    default: 'WALLET',
  }),
  currentWalletBalance: Object.values({
    key: `${scope}.currentWalletBalance`,
    default: 'Current Wallet Balance',
  }),
  transferFunds: Object.values({
    key: `${scope}.transferFunds`,
    default: 'Transfer Funds',
  }),
  bankList: Object.values({
    key: `${scope}.bankList`,
    default: 'Bank List',
  }),
  addBankAccount: Object.values({
    key: `${scope}.addBankAccount`,
    default: 'Add bank account',
  }),
  allTransactionHistory: Object.values({
    key: `${scope}.allTransactionHistory`,
    default: 'All Transaction History',
  }),
  transferFundRequest: Object.values({
    key: `${scope}.transferFundRequest`,
    default: 'Transfer Fund Request',
  }),
  enterAmountToTransfer: Object.values({
    key: `${scope}.enterAmountToTransfer`,
    default: 'Enter Amount to Transfer',
  }),
  miniMumRequiredAmount: Object.values({
    key: `${scope}.miniMumRequiredAmount`,
    default: 'Minimum required amount :',
  }),
  selectPaymentGateway: Object.values({
    key: `${scope}.selectPaymentGateway`,
    default: 'Select Payment Gateway',
  }),
  saveThisAccountFutureUse: Object.values({
    key: `${scope}.saveThisAccountFutureUse`,
    default: 'Save this account for future use',
  }),
  transferFundRequestSuccess: Object.values({
    key: `${scope}.transferFundRequestSuccess`,
    default: 'Transfer Fund Request Success!',
  }),
  successfullySentTransferFundRequest: Object.values({
    key: `${scope}.successfullySentTransferFundRequest`,
    default: 'You have successfully sent a transfer fund request',
  }),
  bankAccountAdded: Object.values({
    key: `${scope}.bankAccountAdded`,
    default: 'Bank Account Added!',
  }),
  successfullyAddedBankAccount: Object.values({
    key: `${scope}.successfullyAddedBankAccount`,
    default: 'You have successfully added a bank account.',
  }),
  bankAccountDeleted: Object.values({
    key: `${scope}.bankAccountDeleted`,
    default: 'Bank Account Deleted!',
  }),
  successfullyDeletedBankAccount: Object.values({
    key: `${scope}.successfullyDeletedBankAccount`,
    default: 'You have successfully deleted a bank account',
  }),
  editBankAccount: Object.values({
    key: `${scope}.editBankAccount`,
    default: 'Edit Bank Account',
  }),
  saveChanges: Object.values({
    key: `${scope}.saveChanges`,
    default: 'Save Changes',
  }),
  bankAccountUpdated: Object.values({
    key: `${scope}.bankAccountUpdated`,
    default: 'Bank Account Updated!',
  }),
  successfullyUpdatedBankAccount: Object.values({
    key: `${scope}.successfullyUpdatedBankAccount`,
    default: 'You have successfully updated a bank account.',
  }),
  deleteBankAccount: Object.values({
    key: `${scope}.deleteBankAccount`,
    default: 'Delete Bank Account',
  }),
  deleteBankAccountSubTitle: Object.values({
    key: `${scope}.deleteBankAccountSubTitle`,
    default: 'Are you sure you want to delete this bank account?',
  }),
};

export default message;
