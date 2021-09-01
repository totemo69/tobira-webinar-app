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
  USER_CREDENTIALS: `${Url}/users/change-password`,
  AUTH_PLANS_GET: `${Url}/plans`,
  AUTH_PAYMENTS_GET: `${Url}/payments`,
  WEBINARS: `${Url}/webinars`,
  AUTH_LOGIN: `${Url}/auth/login`,
  AUTH_REGISTER: `${Url}/auth/register`,
  AUTH_FORGOT: `${Url}/auth/send-password-reset`,
  AUTH_RESET: `${Url}/auth/reset-password`,
  AUTH_VERIFY: `${Url}/auth/verify`,
  ZOOM_ACCOUNT: `${Url}/zoom-accounts`,
  ZOOM_SUBSCRIPTION: `${Url}/zoom-subscriptions`,
  WEBINAR_PUBLIC_DETAIL_PAGE: `${Url}/webinar-page`,
  ATTENDEES: `${Url}/attendees`,
  PAYMENT: `${Url}/payments`,
  BANKS: `${Url}/banks`,
  WALLET: `${Url}/wallets`,
  UPLOAD: `${Url}/files`,
  WITHDRAWS: `${Url}/withdraws`,
  TRANSACTION: `${Url}/transactions`,
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
  LOGIN: 'login',
  ACCOUNT: 'account',
  WEBINAR_LIST: 'webinar-list',
  WEBINAR_DETAILS: 'webinar-details',
  CREATE_WEBINAR: 'create-webinar',
  UPDATE_WEBINAR: 'update-webinar',
  SIGNUP: 'signup',
  VERIFICATION: 'verification',
  GET_PROFILE: 'get-profile',
  UPDATE_PROFILE: 'update-profile',
  WEBINAR: 'webinar',
  REGISTER: 'register',
  REGISTER_CONFIRM: 'register-confirm',
  PAYMENT: 'payment',
  PLAN: 'plan',
  ATTENDEES: 'attendees',
  ATTENDEEDETAIL: 'attendeedetail',
  WALLET: 'wallet',
  BANK: 'bank',
  BANK_LIST: 'bank-list',
  WITHDRAWS: 'withdraws',
  TRANSACTION: 'transaction',
  FORGOT_PASSWORD: 'forgot-password',
};

export const SCHEDULE_TYPE = {
  ONETIME: 'one-time',
  RECURRING: 'recurring',
};

export const PAYMENT_METHOD = {
  PAYPAL: 'paypal',
};

export const BANK_ACCOUNT_TYPE = {
  SAVINGS: '0',
  CHECKING: '1',
};

export const ZOOM_ACCOUNT_STATUS = {
  PENDING: 'pending',
  ACTIVATED: 'activated',
  DEACTIVATED: 'deactivated',
  UNLINK: 'unlink',
};

export const ZOOM_ACCOUNT_TYPE = {
  BASIC: 1,
  LICENSED: 2,
};

export const ZOOM_SUBSCRIPTION_TYPE = {
  NEW: 'new',
  REQUESTED: 'requested',
  APPROVED: 'approved',
  CANCELLED: 'cancelled',
};
