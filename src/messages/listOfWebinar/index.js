export const scope = 'listOfWebinar';

const message = {
  title: Object.values({
    key: `${scope}.title`,
    default: 'Title',
  }),
  schedule: Object.values({
    key: `${scope}.schedule`,
    default: 'Schedule',
  }),
  attendees: Object.values({
    key: `${scope}.attendees`,
    default: 'No. of Attendees',
  }),
  status: Object.values({
    key: `${scope}.status`,
    default: 'Status',
  }),
  action: Object.values({
    key: `${scope}.action`,
    default: 'Action',
  }),
  setupMessage: Object.values({
    key: `${scope}.setupMessage`,
    default: 'You need to setup your zoom account first.',
  }),
  buttonLater: Object.values({
    key: `${scope}.buttonLater`,
    default: 'Later',
  }),
  buttonSetup: Object.values({
    key: `${scope}.buttonSetup`,
    default: 'Setup',
  }),
  viewDetails: Object.values({
    key: `${scope}.viewDetails`,
    default: 'View Details',
  }),
};

export default message;
