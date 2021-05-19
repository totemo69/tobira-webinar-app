export const scope = 'listOfWebinar';

const message = {
  title: Object.values({
    key: `${scope}.title`,
    default: "Title"
  }),
  schedule: Object.values({
    key: `${scope}.schedule`,
    default: "Schedule"
  }),
  attendees: Object.values({
    key: `${scope}.attendees`,
    default: "No. of Attendees"
  }),
  status: Object.values({
    key: `${scope}.status`,
    default: "Status"
  }),
  action: Object.values({
    key: `${scope}.action`,
    default: "Action"
  }),
};

export default message;