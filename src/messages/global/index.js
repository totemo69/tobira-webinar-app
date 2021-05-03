export const scope = 'global';

const message = {
  header: Object.values({
    key: `${scope}.h1`,
    default: 'This is header'
  }),

  And: Object.values({
    key: `${scope}.And`,
    default: 'And'
}),

AgreeMessage: Object.values({
    key: `${scope}.AgreeMessage`,
    default: 'By signing up, you agree to the'
}),
ConfirmPassword: Object.values({
    key: `${scope}.ConfirmPassword`,
    default: 'Confirm Password'
}),
EmailAddress: Object.values({
    key: `${scope}.EmailAddress`,
    default: 'Email Address'
}),
LoginHere: Object.values({
    key: `${scope}.LoginHere`,
    default: 'Log in here',
}),
PrivacyPolicy: Object.values({
    key: `${scope}.PrivacyPolicy`,
    default: 'Privacy Policy',
}),
Password: Object.values({
    key: `${scope}.Password`,
    default: 'Password'
}),
SignUp: Object.values({
    key: `${scope}.SignUp`,
    default: 'Sign Up'
}),
TermsOfService: Object.values({
    key: `${scope}.TermsOfService`,
    default: 'Terms of Service'
}),
Username: Object.values({
    key: `${scope}.Username`,
    default: 'Username'
}),

HaveAccount: Object.values({
    key: `${scope}.HaveAccount`,
    default: 'Already have an account?'
}),



}

export default message;