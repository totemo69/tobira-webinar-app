const Url = process.env.NEXT_PUBLIC_TOBIRA_API
  ? `${process.env.NEXT_PUBLIC_TOBIRA_API}/`
  : `https://tobira-webinar-api.herokuapp.com`;

export const ZOOM_CLIENT_ID = process.env.NEXT_PUBLIC_ZOOM_CLIENT_ID
  ? process.env.NEXT_PUBLIC_ZOOM_CLIENT_ID
  : 'lDDeZcqnTaSi4g42mgnQw';

export const ZOOM_AUTH_CALLBACK = process.env.NEXT_PUBLIC_ZOOM_AUTH_CALLBACK
  ? process.env.NEXT_PUBLIC_ZOOM_AUTH_CALLBACK
  : 'https://tobira-webinar-app.vercel.app/account/callback';

export const ZOOM_URL = process.env.NEXT_PUBLIC_ZOOM_URL
  ? process.env.NEXT_PUBLIC_ZOOM_URL
  : 'https://zoom.us/';

export const COOKIE_PREFIX = 'tobira_webinar_';
export const COOKIE_EXPIRES_DAYS = 7;

export const GET_REQUEST = 'GET';
export const POST_REQUEST = 'POST';
export const PUT_REQUEST = 'PUT';
export const PATCH_REQUEST = 'PATCH';
export const DELETE_REQUEST = 'DELETE';

export const API = {
  AUTH_ATTENDEE: `${Url}/attendees`,
  AUTH_ATTENDEE_COUNT: `${Url}/attendees/count`,
  AUTH_USER_PROFILE: `${Url}/users/profile`,
  AUTH_PLANS_COUNT: `${Url}/plans/count`,
  AUTH_PLANS_GET: `${Url}/plans/`,
  AUTH_PAYMENTS_COUNT: `${Url}/payments/count`,
  AUTH_PAYMENTS_GET: `${Url}/payments`,
  AUTH_WEBINAR: `${Url}/webinars`,
  AUTH_LOGIN: `${Url}/auth/login`,
  AUTH_REGISTER: `${Url}/auth/register`,
  AUTH_ZOOM_ACCOUNT: `${Url}/zoom-accounts`,
};

export const WEBINAR_ROUTE = {
  SIGNUP: '/sign-up',
  LOGIN: '/login',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',
  PROFILE: '/profile',
  ZOOM_ACCOUNT: '/account',
  ZOOM_ACCOUNT_CALLBACK: '/account/callback',
  ZOOM_ACCOUNT_COMPLETE: '/account/complete',
  CREATE_WEBINAR: '/create-webinar',
  LIST_WEBINAR: '/list-webinar',
  WALLET: '/wallet',
  DASHBOARD: '/dashboard',
  PURCHASE_LICENSE: '/purchase-license',
};

export const LOADING_PREFIX = {
  ACCOUNT: 'account',
  WEBINAR_LIST: 'webinar-list',
};