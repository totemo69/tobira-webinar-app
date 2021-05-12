export const scope = 'editprofile';


const message = {
  Username: Object.values({
    key: `${scope}.Username`,
    default: 'Username'
  }),
  Emailaddress: Object.values({
    key: `${scope}.Emailaddress`,
    default: 'Email Address'
  }),
  Fullname: Object.values({
    key: `${scope}.Fullname`,
    default: 'Full Name'
  }),
  Contactnumber: Object.values({
    key: `${scope}.Contactnumber`,
    default: 'Contact Number'
  }),
  Newpassword: Object.values({
    key: `${scope}.Newpassword`,
    default: 'New Password'
  }),
  Confirmpassword: Object.values({
    key: `${scope}.Confirmpassword`,
    default: 'Confirm Password'
  }),
  Savechanges: Object.values({
    key: `${scope}.Savechanges`,
    default: 'Save Changes'
  }),
  Editprofile: Object.values({
    key: `${scope}.Editprofile`,
    default: 'Edit Profile'
  }),
  ChangePassword: Object.values({
    key: `${scope}.ChangePassword`,
    default: 'Change Password'
  }),
};

export default message;