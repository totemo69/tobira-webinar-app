export const scope = 'listOfWebinar';

const message = {
  title: Object.values({
    key: `${scope}.title`,
    default: "Title"
  }),
  listOfWebinar: Object.values({
    key: `${scope}.listOfWebinar`,
    default: "LIST OF WEBINAR"
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
  search: Object.values({
    key: `${scope}.search`,
    default: "Search"
  }),
  searchPlaceholder: Object.values({
    key: `${scope}.searchPlaceholder`,
    default: "Search webinar title"
  }),
};

export default message;