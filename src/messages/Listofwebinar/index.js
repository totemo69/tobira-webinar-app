export const scope = 'listofwebinar';

const message = {
  Tittle: Object.values({
    key: `${scope}.Tittle`,
    default: "Tittle"
  }),
  Listofwebinar: Object.values({
    key: `${scope}.Listofwebinar`,
    default: "LIST OF WEBINAR"
  }),
  Schedule: Object.values({
    key: `${scope}.Schedule`,
    default: "Schedule"
  }),
  Attendees: Object.values({
    key: `${scope}.Attendees`,
    default: "No. of Attendees"
  }),
  Status: Object.values({
    key: `${scope}.Status`,
    default: "Status"
  }),
  Action: Object.values({
    key: `${scope}.Action`,
    default: "Action"
  }),
  Search: Object.values({
    key: `${scope}.Search`,
    default: "Search"
  }),
  SearchPlaceholder: Object.values({
    key: `${scope}.SearchPlaceholder`,
    default: "Search webinar title"
  }),
  
};

export default message;