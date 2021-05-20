

const Url = process.env.TOBIRA_API
  ? `${process.env.TOBIRA_API}/`
  : `https://tobira-webinar-api.herokuapp.com`;



export const API = {
  AUTH_ATTENDEE: `${Url}/attendees`,
};