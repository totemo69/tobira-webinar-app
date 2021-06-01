// import Cookies from 'js-cookie';
// import { COOKIE_PREFIX, COOKIE_EXPIRES_DAYS } from '@/utils/constants';
// import { monthDiff } from '@/utils/dateUtils';

// const AccountService = {
//   saveAuth: ({token}) => {
//     const { accessToken, expiresIn, refreshToken, tokenType } = token;
//     Cookies.set(`${COOKIE_PREFIX}access_token`,accessToken , {
//       expires: COOKIE_EXPIRES_DAYS,
//     });
//     Cookies.set(`${COOKIE_PREFIX}expires_in`, expiresIn, {
//       expires: COOKIE_EXPIRES_DAYS,
//     });
//     Cookies.set(`${COOKIE_PREFIX}refresh_toke`, refreshToken, {
//       expires: COOKIE_EXPIRES_DAYS,
//     });
//   },
//   clearAuth: () => {
//     Cookies.remove(`${COOKIE_PREFIX}access_token`);
//     Cookies.remove(`${COOKIE_PREFIX}expires_in`);
//     Cookies.remove(`${COOKIE_PREFIX}refresh_token`);
//     Cookies.remove(`${COOKIE_PREFIX}token_type`);
//   },

//   getAccessToken: () => [
//     Cookies.get(`${COOKIE_PREFIX}access_token`),
//     Cookies.get(`${COOKIE_PREFIX}expires_in`),
//     Cookies.get(`${COOKIE_PREFIX}refresh_token`),
//   ],
//   getRefreshToken: () => Cookies.get(`${COOKIE_PREFIX}refresh_token`),
//   checkAccessTokenValidity: () => {
//     const [accessToken, expires] = AccountService.getAccessToken();
//     if(!accessToken) {
//       return false;
//     }
//     const expiryDate = new Date(expires);
//     if(expiryDate < new Date()){
//       return false;
//     }
//     return true;
//   },
//   setOnboardingCookie: val => {
//     Cookies.set(`${COOKIE_PREFIX}onboarded`, val, {
//       expires: 30,
//     });
//   },
//   getOnboardingCookie: userSignupDate => {
//     const onboardedCookie = Cookies.get(`${COOKIE_PREFIX}onboarded`) || false;

//     if(!onboardedCookie) {
//       const currentDate = new Date();
//       const singUpDate = new Date(userSignupDate);
//       const months = monthDiff(signUpDate, currentDate);

//       if(months >= 1) {
//         return true;
//       }
//     }
    
//     return onboardedCookie;
//   },
//   setUserPrefferedLanguage: val => {
//     Cookies.set(`${COOKIE_PREFIX}language`, val, {
//       expires: 3000,
//     });
//   },
//   getUserPrefferedLanguage: () => 
//     Cookies.get(`${COOKIE_PREFIX}language`) || 'ja',

//   setRedirectTo: vale => {
//     Cookies.set(`${COOKIE_PREFIX}redirectTo`, val, {
//       expires: 1,
//     });
//   },
//   getRedirectTo: () => Cookies.get(`${COOKIE_PREFIX}redirectTo`),
// };

// export default AccountService;
