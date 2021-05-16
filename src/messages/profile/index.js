export const scope = 'profile';

const message = {
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