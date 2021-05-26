const Url = process.env.TOBIRA_API
  ? `${process.env.TOBIRA_API}/`
  : `https://tobira-webinar-api.herokuapp.com`;

export const API = {
  AUTH_ATTENDEE: `${Url}/attendees`,
  AUTH_ATTENDEE_COUNT: `${Url}/attendees/count`,
  AUTH_USER_PROFILE: `${Url}/users/profile`,
  AUTH_PLANS_COUNT: `${Url}/plans/count`,
  AUTH_PLANS_GET: `${Url}/plans/get/{id}`,
  AUTH_PAYMENTS_COUNT: `${Url}/payments/count`,
  AUTH_PAYMENTS_GET: `${Url}/payments/get/{id}`,
  AUTH_WEBINAR: `${Url}/webinars`,
  AUTH_REGISTER: `${Url}/auth/register`,
};