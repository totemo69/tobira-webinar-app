export const scope = 'SampleSignup';

const message = {
    And: Object.values({
        key: `${scope}.paragraph`,
        default: 'そして'
    }),

    AgreeMessage: Object.values({
        key: `${scope}.paragraph`,
        default: 'サインアップすると、'
    }),
    ConfirmPassword: Object.values({
        key: `${scope}.Label`,
        default: 'パスワードを認証する'
    }),
    EmailAddress: Object.values({
        key: `${scope}.Label`,
        default: '電子メールアドレス'
    }),
    LoginHere: Object.values({
        key: `${scope}.Link`,
        default: 'ここでログイン',
    }),
    PrivacyPolicy: Object.values({
        key: `${scope}.Label`,
        default: '個人情報保護方針。',
    }),
    Password: Object.values({
        key: `${scope}.Label`,
        default: 'パスワード'
    }),
    SignUp: Object.values({
        key: `${scope}.button`,
        default: 'サインアップ'
    }),
    TermsOfService: Object.values({
        key: `${scope}.Label`,
        default: '利用規約'
    }),
    Username: Object.values({
        key: `${scope}.Label`,
        default: 'ユーザー名'
    }),

    HaveAccount: Object.values({
        key: `${scope}.paragraph`,
        default: 'すでにアカウントをお持ちですか？'
    }),

}

export default message;