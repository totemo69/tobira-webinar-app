export const scope = 'sidebar';

const message = {
  webinars: Object.values({
    key: `${scope}.webinars`,
    default: 'Webinars',
  }),
  createWebinar: Object.values({
    key: `${scope}.createWebinar`,
    default: 'Create Webinar',
  }),
};

export default message;
