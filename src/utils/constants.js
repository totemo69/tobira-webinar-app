const Url = process.env.NEXT_PUBLIC_TOBIRA_API
  ? `${process.env.NEXT_PUBLIC_TOBIRA_API}`
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
  AUTH_USER_PROFILE: `${Url}/users/profile`,
  AUTH_PLANS_GET: `${Url}/plans`,
  AUTH_PAYMENTS_GET: `${Url}/payments`,
  WEBINARS: `${Url}/webinars`,
  AUTH_LOGIN: `${Url}/auth/login`,
  AUTH_REGISTER: `${Url}/auth/register`,
  AUTH_VERIFY: `${Url}/auth/verify`,
  ZOOM_ACCOUNT: `${Url}/zoom-accounts`,
  WEBINAR_PUBLIC_DETAIL_PAGE: `${Url}/webinar-page`,
  ATTENDEES: `${Url}/attendees`,
  PAYMENT: `${Url}/payments`,
  BANKS: `${Url}/banks`,
  UPLOAD: `${Url}/files`,
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
  CREATE_WEBINAR: '/webinars/create-webinar',
  LIST_WEBINAR: '/webinars/list-webinar',
  DETAILS_WEBINAR: '/webinars/details',
  WALLET: '/wallet',
  DASHBOARD: '/dashboard',
  PURCHASE_LICENSE: '/purchase-license',
  WEBINAR_DETAIL: '/webinar-detail',
  WEBINAR_UPDATE_DETAILS: '/webinars/update',
};

export const LOADING_PREFIX = {
  ACCOUNT: 'account',
  WEBINAR_LIST: 'webinar-list',
  WEBINAR_DETAILS: 'webinar-details',
  CREATE_WEBINAR: 'create-webinar',
  SIGNUP: 'signup',
  VERIFICATION: 'verification',
  GET_PROFILE: 'get-profile',
  UPDATE_PROFILE: 'update-profile',
  WEBINAR: 'webinar',
  REGISTER: 'register',
  PAYMENT: 'payment',
  PLAN: 'plan',
  ATTENDEES: 'attendees',
  ATTENDEEDETAIL: 'attendeedetail',
  WALLET: 'wallet',
};

export const SCHEDULE_TYPE = {
  ONETIME: 'one-time',
  RECURRING: 'recurring',
};

export const PAYMENT_METHOD = {
  PAYPAL: 'paypal',
};
