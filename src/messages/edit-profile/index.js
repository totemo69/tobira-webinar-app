export const scope = 'editProfile';


const message = {
  username: Object.values({
    key: `${scope}.username`,
    default: 'Username'
  }),
  emailAddress: Object.values({
    key: `${scope}.emailAddress`,
    default: 'Email Address'
  }),
  fullName: Object.values({
    key: `${scope}.fullName`,
    default: 'Full Name'
  }),
  contactNumber: Object.values({
    key: `${scope}.contactNumber`,
    default: 'Contact Number'
  }),
  newPassword: Object.values({
    key: `${scope}.newPassword`,
    default: 'New Password'
  }),
  confirmPassword: Object.values({
    key: `${scope}.confirmPassword`,
    default: 'Confirm Password'
  }),
  saveChanges: Object.values({
    key: `${scope}.saveChanges`,
    default: 'Save Changes'
  }),
  editProfile: Object.values({
    key: `${scope}.editProfile`,
    default: 'Edit Profile'
  }),
  changePassword: Object.values({
    key: `${scope}.changePassword`,
    default: 'Change Password'
  }),
};

export default message;