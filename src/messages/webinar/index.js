export const scope = 'webinar';

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
  congrats: Object.values({
    key: `${scope}.congrats`,
    default: 'Congratulations!',
  }),
  createdSuccess: Object.values({
    key: `${scope}.createdSuccess`,
    default: 'Your webinar has been successfully created.',
  }),
  copyMessage: Object.values({
    key: `${scope}.copyMessage`,
    default: 'Please copy the generated ticket link.',
  }),
  number: Object.values({
    key: `${scope}.number`,
    default: 'No.',
  }),
  emailAddress: Object.values({
    key: `${scope}.emailAddress`,
    default: 'Email Address',
  }),
  paymentStatus: Object.values({
    key: `${scope}.paymentStatus`,
    default: 'Email Address',
  }),
  details: Object.values({
    key: `${scope}.details`,
    default: 'Details',
  }),
  registeredParticipants: Object.values({
    key: `${scope}.registeredParticipants`,
    default: 'Registered Participants',
  }),
  editDetails: Object.values({
    key: `${scope}.editDetails`,
    default: 'Edit Details',
  }),
};

export default message;
