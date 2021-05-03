export const scope = 'SampleSignup';

const message = {
    And: Object.values({
        key: `${scope}.paragraph`,
        default: 'And'
    }),

    AgreeMessage: Object.values({
        key: `${scope}.paragraph`,
        default: 'By signing up, you agree to the'
    }),
    ConfirmPassword: Object.values({
        key: `${scope}.Label`,
        default: 'Confirm Password'
    }),
    EmailAddress: Object.values({
        key: `${scope}.Label`,
        default: 'Email Address'
    }),
    LoginHere: Object.values({
        key: `${scope}.Link`,
        default: 'Log in here',
    }),
    PrivacyPolicy: Object.values({
        key: `${scope}.Label`,
        default: 'Privacy Policy',
    }),
    Password: Object.values({
        key: `${scope}.Label`,
        default: 'Password'
    }),
    SignUp: Object.values({
        key: `${scope}.button`,
        default: 'Sign Up'
    }),
    TermsOfService: Object.values({
        key: `${scope}.Label`,
        default: 'Terms of Service'
    }),
    Username: Object.values({
        key: `${scope}.Label`,
        default: 'Username'
    }),

    HaveAccount: Object.values({
        key: `${scope}.paragraph`,
        default: 'Already have an account?'
    }),


}

export default message;